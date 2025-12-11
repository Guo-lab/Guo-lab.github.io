#!/bin/bash

for f in *.mp4 *.mov; do
    [ -e "$f" ] || continue   # skip if no match
    echo "Compressing $f ..."
    ffmpeg -i "$f" -vcodec libx265 -crf 30 -preset slow "compressed_$f"
done

echo "Done!"

