export function isoDate(t: Date | undefined): string | undefined {
    return t?.toISOString()?.split('T')?.at(0);
}

export function isoDateTime(t: Date | undefined): string | undefined {
    return t?.toISOString()?.slice(0, 16);
}

export function isoTime(t: Date | undefined): string | undefined {
    return isoDateTime(t)?.split('T')?.at(1);
}

export function dateOrNull(date: string | undefined): Date | null {
    if (!date) {
        return null;
    }
    return new Date(date);
}
