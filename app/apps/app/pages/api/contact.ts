import { NextApiRequest, NextApiResponse } from 'next'

// How to submit google forms programmatically:
//
//  https://spreadsheet.dev/submit-responses-to-google-form-apps-script
//
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = req.body

  if (form.name == null || form.name.length === 0) {
    return res.status(400).json({
      error: 'Name is required',
    })
  }

  if (form.email == null || form.email.length === 0) {
    return res.status(400).json({
      error: 'Email is required',
    })
  }

  if (form.desc == null || form.desc.length === 0) {
    return res.status(400).json({
      error: 'Description is required',
    })
  }

  try {
    const url = new URL(
      process.env['NODE_ENV'] === 'production' 
        ? 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfxlbI1Srlg9Ka2TVBpKtZDp-ixWDB4iE_oz_GaekdyRmL2Dw/formResponse' 
        : 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6Pg7dgICZQqDvuvtqMZ4zrsDmq9Fo_OfTQP5z433ryz5WaA/formResponse'
    )
    
    url.searchParams.append('entry.802423325', form.name)
    url.searchParams.append('entry.1487775995', form.desc)
    url.searchParams.append('entry.246233049', form.email)

    const result = await fetch(url.href, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    })

    if (result.status !== 200) {
      throw new Error(await result.text())
    }
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      error: 'Could not submit form - please try again later',
    })
  }

  return res.status(200).json({ message: 'SUCCESS' })
}
