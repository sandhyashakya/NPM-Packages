declare module 'ifsc' {
    interface BankDetails {
        BANK: string;
        BRANCH: string;
        ADDRESS: string;
        CONTACT: string;
        CITY: string;
        DISTRICT: string;
        STATE: string;
        MICR: string;
        IFSC: string;
        BANKCODE: string;
    }

    export function validate(ifscCode: string): boolean;
    export function fetchDetails(ifscCode: string): Promise<BankDetails>;
}
