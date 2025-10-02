// declare module 'mongoose-sequence' {
//   import { Mongoose } from 'mongoose';
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   function AutoIncrementFactory(mongoose: Mongoose): any;
//   export = AutoIncrementFactory;
// }
// types/mongoose-sequence.d.ts
declare module 'mongoose-sequence' {
    import { Mongoose, Schema } from 'mongoose';

    interface AutoIncrementIDOptions {
        inc_field: string;
        start_seq?: number;
        disable_hooks?: boolean;
        id_field?: string;
    }

    function AutoIncrementFactory(mongoose: Mongoose): (schema: Schema, options: AutoIncrementIDOptions) => void;

    export = AutoIncrementFactory;
}
