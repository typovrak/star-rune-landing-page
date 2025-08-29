{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_22    # Node.js LTS
    pkgs.nodePackages.npm
  ];
}
