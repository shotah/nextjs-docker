import React from 'react';

import media1 from "../public/media-1.jpg";
import media2 from "../public/media-2.jpg";
import media3 from "../public/media-3.jpg";
import media4 from "../public/media-4.jpg";
import media5 from "../public/media-5.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
