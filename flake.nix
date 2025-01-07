# https://github.com/NixOS/nixpkgs/commit/e032e7ed264d9cae8793b947fce8c6205efeb272 

{
  inputs = {
    nixpkgs.url = "https://github.com/NixOS/nixpkgs/archive/e032e7ed264d9cae8793b947fce8c6205efeb272.tar.gz";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils }:
    utils.lib.eachDefaultSystem(system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.nodejs.pkgs.pnpm
            pkgs.nodejs
          ];
        };
      }
    );
}

