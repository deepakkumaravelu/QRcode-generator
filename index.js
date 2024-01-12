import qr from 'qr-image';
import fs from 'node:fs';

    const url=URLin;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr.png'));
