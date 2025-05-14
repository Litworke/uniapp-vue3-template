import type { Plugin } from 'vite';



export const subPackages = ['src/pages-sub'];


// eslint-disable-next-line prefer-const
let cdnUpload: Plugin | null = null;

export const plugins = [cdnUpload];
