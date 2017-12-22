#!/usr/bin/env sh

echo "# Web examples" > README.md
echo >> README.md
echo "## Examples" >> README.md
echo >> README.md
find -name 'index.html' -printf '%h\n' | sed 's#./##' | sed 's#.*#- [&](./&)#' >> README.md
