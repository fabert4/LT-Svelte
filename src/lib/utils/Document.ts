import { DocumentCreateModel, type DocumentModel } from '$lib/generated';
import Compressor from 'compressorjs';
import JSZip from 'jszip';

export function b64Mime(mime: string, base64: string): string {
    return `data:${mime};base64,${base64}`;
}

export function downloadOne(doc: DocumentModel) {
    download(doc.name, b64Mime(doc.mime, doc.base64));
}

export async function downloadAll(docs: DocumentModel[]) {
    const zip = new JSZip();
    docs.forEach((doc) => {
        zip.file(doc.name, doc.base64, { base64: true });
    });
    const content = await zip.generateAsync({ type: 'blob' });
    download('Documents.zip', URL.createObjectURL(content));
}

export function download(name: string, binary: string) {
    const link = document.createElement('a');
    link.href = binary;
    link.download = name;
    link.click();
}

export async function documentFromFile(
    file: File,
    type: DocumentCreateModel.type
): Promise<DocumentCreateModel> {
    const compressed = type === DocumentCreateModel.type.IMAGE ? await compress(file) : file;
    const base64: string = await blobToBase64(compressed);
    return {
        name: file.name,
        mime: file.type,
        base64,
        type
    };
}

async function blobToBase64(blob: Blob): Promise<string> {
    return (await blobToDataUrl(blob)).split(',')[1];
}

function blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

async function compress(file: File, quality = 0.6, convertSize = 2000000): Promise<Blob | File> {
    return new Promise((resolve, reject) => {
        new Compressor(file, {
            quality, // the quality of the image, max is 1,
            convertSize, // 2000000 === 2mb
            success: resolve,
            error: reject
        });
    });
}
