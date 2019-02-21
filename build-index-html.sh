#!/usr/bin/env sh

echo "<html>" > index.html
echo "<head>" >> index.html
echo "<title>Web examples</title>" >> index.html
echo "</head>" >> index.html
echo "<body>" >> index.html

echo "<h1>Web examples</h1>" >> index.html
echo "<h2>Examples</h2>" >> index.html
echo "<ul>" >> index.html
find -mindepth 2 -name 'index.html' -printf '%h\n' | sed 's#./##' | sed 's#.*#<li><a href="./&">&</a></li>#' >> index.html
echo "</ul>" >> index.html

echo "</body>" >> index.html
echo "</html>" >> index.html