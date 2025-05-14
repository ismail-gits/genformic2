
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Forms
 * 
 */
export type Forms = $Result.DefaultSelection<Prisma.$FormsPayload>
/**
 * Model UserReponses
 * 
 */
export type UserReponses = $Result.DefaultSelection<Prisma.$UserReponsesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Forms
 * const forms = await prisma.forms.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Forms
   * const forms = await prisma.forms.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.forms`: Exposes CRUD operations for the **Forms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.forms.findMany()
    * ```
    */
  get forms(): Prisma.FormsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userReponses`: Exposes CRUD operations for the **UserReponses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserReponses
    * const userReponses = await prisma.userReponses.findMany()
    * ```
    */
  get userReponses(): Prisma.UserReponsesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Forms: 'Forms',
    UserReponses: 'UserReponses'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "forms" | "userReponses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Forms: {
        payload: Prisma.$FormsPayload<ExtArgs>
        fields: Prisma.FormsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          findFirst: {
            args: Prisma.FormsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          findMany: {
            args: Prisma.FormsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>[]
          }
          create: {
            args: Prisma.FormsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          createMany: {
            args: Prisma.FormsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>[]
          }
          delete: {
            args: Prisma.FormsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          update: {
            args: Prisma.FormsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          deleteMany: {
            args: Prisma.FormsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>[]
          }
          upsert: {
            args: Prisma.FormsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          aggregate: {
            args: Prisma.FormsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForms>
          }
          groupBy: {
            args: Prisma.FormsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormsCountArgs<ExtArgs>
            result: $Utils.Optional<FormsCountAggregateOutputType> | number
          }
        }
      }
      UserReponses: {
        payload: Prisma.$UserReponsesPayload<ExtArgs>
        fields: Prisma.UserReponsesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserReponsesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReponsesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserReponsesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReponsesPayload>
          }
          findFirst: {
            args: Prisma.UserReponsesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReponsesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserReponsesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReponsesPayload>
          }
          findMany: {
            args: Prisma.UserReponsesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReponsesPayload>[]
          }
          create: {
            args: Prisma.UserReponsesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReponsesPayload>
          }
          createMany: {
            args: Prisma.UserReponsesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserReponsesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReponsesPayload>[]
          }
          delete: {
            args: Prisma.UserReponsesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReponsesPayload>
          }
          update: {
            args: Prisma.UserReponsesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReponsesPayload>
          }
          deleteMany: {
            args: Prisma.UserReponsesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserReponsesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserReponsesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReponsesPayload>[]
          }
          upsert: {
            args: Prisma.UserReponsesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReponsesPayload>
          }
          aggregate: {
            args: Prisma.UserReponsesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserReponses>
          }
          groupBy: {
            args: Prisma.UserReponsesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserReponsesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserReponsesCountArgs<ExtArgs>
            result: $Utils.Optional<UserReponsesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    forms?: FormsOmit
    userReponses?: UserReponsesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FormsCountOutputType
   */

  export type FormsCountOutputType = {
    responses: number
  }

  export type FormsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | FormsCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * FormsCountOutputType without action
   */
  export type FormsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsCountOutputType
     */
    select?: FormsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormsCountOutputType without action
   */
  export type FormsCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReponsesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Forms
   */

  export type AggregateForms = {
    _count: FormsCountAggregateOutputType | null
    _min: FormsMinAggregateOutputType | null
    _max: FormsMaxAggregateOutputType | null
  }

  export type FormsMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    jsonForm: string | null
    createdAt: Date | null
    formTheme: string | null
    formBackground: string | null
    formStyle: string | null
  }

  export type FormsMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    jsonForm: string | null
    createdAt: Date | null
    formTheme: string | null
    formBackground: string | null
    formStyle: string | null
  }

  export type FormsCountAggregateOutputType = {
    id: number
    ownerId: number
    jsonForm: number
    createdAt: number
    formTheme: number
    formBackground: number
    formStyle: number
    _all: number
  }


  export type FormsMinAggregateInputType = {
    id?: true
    ownerId?: true
    jsonForm?: true
    createdAt?: true
    formTheme?: true
    formBackground?: true
    formStyle?: true
  }

  export type FormsMaxAggregateInputType = {
    id?: true
    ownerId?: true
    jsonForm?: true
    createdAt?: true
    formTheme?: true
    formBackground?: true
    formStyle?: true
  }

  export type FormsCountAggregateInputType = {
    id?: true
    ownerId?: true
    jsonForm?: true
    createdAt?: true
    formTheme?: true
    formBackground?: true
    formStyle?: true
    _all?: true
  }

  export type FormsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to aggregate.
     */
    where?: FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormsOrderByWithRelationInput | FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormsMaxAggregateInputType
  }

  export type GetFormsAggregateType<T extends FormsAggregateArgs> = {
        [P in keyof T & keyof AggregateForms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForms[P]>
      : GetScalarType<T[P], AggregateForms[P]>
  }




  export type FormsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormsWhereInput
    orderBy?: FormsOrderByWithAggregationInput | FormsOrderByWithAggregationInput[]
    by: FormsScalarFieldEnum[] | FormsScalarFieldEnum
    having?: FormsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormsCountAggregateInputType | true
    _min?: FormsMinAggregateInputType
    _max?: FormsMaxAggregateInputType
  }

  export type FormsGroupByOutputType = {
    id: string
    ownerId: string
    jsonForm: string
    createdAt: Date
    formTheme: string
    formBackground: string
    formStyle: string
    _count: FormsCountAggregateOutputType | null
    _min: FormsMinAggregateOutputType | null
    _max: FormsMaxAggregateOutputType | null
  }

  type GetFormsGroupByPayload<T extends FormsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormsGroupByOutputType[P]>
            : GetScalarType<T[P], FormsGroupByOutputType[P]>
        }
      >
    >


  export type FormsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    jsonForm?: boolean
    createdAt?: boolean
    formTheme?: boolean
    formBackground?: boolean
    formStyle?: boolean
    responses?: boolean | Forms$responsesArgs<ExtArgs>
    _count?: boolean | FormsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forms"]>

  export type FormsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    jsonForm?: boolean
    createdAt?: boolean
    formTheme?: boolean
    formBackground?: boolean
    formStyle?: boolean
  }, ExtArgs["result"]["forms"]>

  export type FormsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    jsonForm?: boolean
    createdAt?: boolean
    formTheme?: boolean
    formBackground?: boolean
    formStyle?: boolean
  }, ExtArgs["result"]["forms"]>

  export type FormsSelectScalar = {
    id?: boolean
    ownerId?: boolean
    jsonForm?: boolean
    createdAt?: boolean
    formTheme?: boolean
    formBackground?: boolean
    formStyle?: boolean
  }

  export type FormsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "jsonForm" | "createdAt" | "formTheme" | "formBackground" | "formStyle", ExtArgs["result"]["forms"]>
  export type FormsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | Forms$responsesArgs<ExtArgs>
    _count?: boolean | FormsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Forms"
    objects: {
      responses: Prisma.$UserReponsesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      jsonForm: string
      createdAt: Date
      formTheme: string
      formBackground: string
      formStyle: string
    }, ExtArgs["result"]["forms"]>
    composites: {}
  }

  type FormsGetPayload<S extends boolean | null | undefined | FormsDefaultArgs> = $Result.GetResult<Prisma.$FormsPayload, S>

  type FormsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormsCountAggregateInputType | true
    }

  export interface FormsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Forms'], meta: { name: 'Forms' } }
    /**
     * Find zero or one Forms that matches the filter.
     * @param {FormsFindUniqueArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormsFindUniqueArgs>(args: SelectSubset<T, FormsFindUniqueArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Forms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormsFindUniqueOrThrowArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormsFindUniqueOrThrowArgs>(args: SelectSubset<T, FormsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsFindFirstArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormsFindFirstArgs>(args?: SelectSubset<T, FormsFindFirstArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsFindFirstOrThrowArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormsFindFirstOrThrowArgs>(args?: SelectSubset<T, FormsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.forms.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.forms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formsWithIdOnly = await prisma.forms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormsFindManyArgs>(args?: SelectSubset<T, FormsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Forms.
     * @param {FormsCreateArgs} args - Arguments to create a Forms.
     * @example
     * // Create one Forms
     * const Forms = await prisma.forms.create({
     *   data: {
     *     // ... data to create a Forms
     *   }
     * })
     * 
     */
    create<T extends FormsCreateArgs>(args: SelectSubset<T, FormsCreateArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {FormsCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const forms = await prisma.forms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormsCreateManyArgs>(args?: SelectSubset<T, FormsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {FormsCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const forms = await prisma.forms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `id`
     * const formsWithIdOnly = await prisma.forms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormsCreateManyAndReturnArgs>(args?: SelectSubset<T, FormsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Forms.
     * @param {FormsDeleteArgs} args - Arguments to delete one Forms.
     * @example
     * // Delete one Forms
     * const Forms = await prisma.forms.delete({
     *   where: {
     *     // ... filter to delete one Forms
     *   }
     * })
     * 
     */
    delete<T extends FormsDeleteArgs>(args: SelectSubset<T, FormsDeleteArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Forms.
     * @param {FormsUpdateArgs} args - Arguments to update one Forms.
     * @example
     * // Update one Forms
     * const forms = await prisma.forms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormsUpdateArgs>(args: SelectSubset<T, FormsUpdateArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {FormsDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.forms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormsDeleteManyArgs>(args?: SelectSubset<T, FormsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const forms = await prisma.forms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormsUpdateManyArgs>(args: SelectSubset<T, FormsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms and returns the data updated in the database.
     * @param {FormsUpdateManyAndReturnArgs} args - Arguments to update many Forms.
     * @example
     * // Update many Forms
     * const forms = await prisma.forms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forms and only return the `id`
     * const formsWithIdOnly = await prisma.forms.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormsUpdateManyAndReturnArgs>(args: SelectSubset<T, FormsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Forms.
     * @param {FormsUpsertArgs} args - Arguments to update or create a Forms.
     * @example
     * // Update or create a Forms
     * const forms = await prisma.forms.upsert({
     *   create: {
     *     // ... data to create a Forms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Forms we want to update
     *   }
     * })
     */
    upsert<T extends FormsUpsertArgs>(args: SelectSubset<T, FormsUpsertArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.forms.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormsCountArgs>(
      args?: Subset<T, FormsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormsAggregateArgs>(args: Subset<T, FormsAggregateArgs>): Prisma.PrismaPromise<GetFormsAggregateType<T>>

    /**
     * Group by Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormsGroupByArgs['orderBy'] }
        : { orderBy?: FormsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Forms model
   */
  readonly fields: FormsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Forms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responses<T extends Forms$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Forms$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Forms model
   */
  interface FormsFieldRefs {
    readonly id: FieldRef<"Forms", 'String'>
    readonly ownerId: FieldRef<"Forms", 'String'>
    readonly jsonForm: FieldRef<"Forms", 'String'>
    readonly createdAt: FieldRef<"Forms", 'DateTime'>
    readonly formTheme: FieldRef<"Forms", 'String'>
    readonly formBackground: FieldRef<"Forms", 'String'>
    readonly formStyle: FieldRef<"Forms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Forms findUnique
   */
  export type FormsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where: FormsWhereUniqueInput
  }

  /**
   * Forms findUniqueOrThrow
   */
  export type FormsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where: FormsWhereUniqueInput
  }

  /**
   * Forms findFirst
   */
  export type FormsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormsOrderByWithRelationInput | FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormsScalarFieldEnum | FormsScalarFieldEnum[]
  }

  /**
   * Forms findFirstOrThrow
   */
  export type FormsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormsOrderByWithRelationInput | FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormsScalarFieldEnum | FormsScalarFieldEnum[]
  }

  /**
   * Forms findMany
   */
  export type FormsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormsOrderByWithRelationInput | FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormsScalarFieldEnum | FormsScalarFieldEnum[]
  }

  /**
   * Forms create
   */
  export type FormsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * The data needed to create a Forms.
     */
    data: XOR<FormsCreateInput, FormsUncheckedCreateInput>
  }

  /**
   * Forms createMany
   */
  export type FormsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormsCreateManyInput | FormsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Forms createManyAndReturn
   */
  export type FormsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * The data used to create many Forms.
     */
    data: FormsCreateManyInput | FormsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Forms update
   */
  export type FormsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * The data needed to update a Forms.
     */
    data: XOR<FormsUpdateInput, FormsUncheckedUpdateInput>
    /**
     * Choose, which Forms to update.
     */
    where: FormsWhereUniqueInput
  }

  /**
   * Forms updateMany
   */
  export type FormsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormsUpdateManyMutationInput, FormsUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormsWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Forms updateManyAndReturn
   */
  export type FormsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * The data used to update Forms.
     */
    data: XOR<FormsUpdateManyMutationInput, FormsUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormsWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Forms upsert
   */
  export type FormsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * The filter to search for the Forms to update in case it exists.
     */
    where: FormsWhereUniqueInput
    /**
     * In case the Forms found by the `where` argument doesn't exist, create a new Forms with this data.
     */
    create: XOR<FormsCreateInput, FormsUncheckedCreateInput>
    /**
     * In case the Forms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormsUpdateInput, FormsUncheckedUpdateInput>
  }

  /**
   * Forms delete
   */
  export type FormsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter which Forms to delete.
     */
    where: FormsWhereUniqueInput
  }

  /**
   * Forms deleteMany
   */
  export type FormsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormsWhereInput
    /**
     * Limit how many Forms to delete.
     */
    limit?: number
  }

  /**
   * Forms.responses
   */
  export type Forms$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesInclude<ExtArgs> | null
    where?: UserReponsesWhereInput
    orderBy?: UserReponsesOrderByWithRelationInput | UserReponsesOrderByWithRelationInput[]
    cursor?: UserReponsesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserReponsesScalarFieldEnum | UserReponsesScalarFieldEnum[]
  }

  /**
   * Forms without action
   */
  export type FormsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
  }


  /**
   * Model UserReponses
   */

  export type AggregateUserReponses = {
    _count: UserReponsesCountAggregateOutputType | null
    _min: UserReponsesMinAggregateOutputType | null
    _max: UserReponsesMaxAggregateOutputType | null
  }

  export type UserReponsesMinAggregateOutputType = {
    id: string | null
    formId: string | null
    jsonResponse: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type UserReponsesMaxAggregateOutputType = {
    id: string | null
    formId: string | null
    jsonResponse: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type UserReponsesCountAggregateOutputType = {
    id: number
    formId: number
    jsonResponse: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type UserReponsesMinAggregateInputType = {
    id?: true
    formId?: true
    jsonResponse?: true
    createdAt?: true
    createdBy?: true
  }

  export type UserReponsesMaxAggregateInputType = {
    id?: true
    formId?: true
    jsonResponse?: true
    createdAt?: true
    createdBy?: true
  }

  export type UserReponsesCountAggregateInputType = {
    id?: true
    formId?: true
    jsonResponse?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type UserReponsesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReponses to aggregate.
     */
    where?: UserReponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReponses to fetch.
     */
    orderBy?: UserReponsesOrderByWithRelationInput | UserReponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserReponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserReponses
    **/
    _count?: true | UserReponsesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserReponsesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserReponsesMaxAggregateInputType
  }

  export type GetUserReponsesAggregateType<T extends UserReponsesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserReponses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserReponses[P]>
      : GetScalarType<T[P], AggregateUserReponses[P]>
  }




  export type UserReponsesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReponsesWhereInput
    orderBy?: UserReponsesOrderByWithAggregationInput | UserReponsesOrderByWithAggregationInput[]
    by: UserReponsesScalarFieldEnum[] | UserReponsesScalarFieldEnum
    having?: UserReponsesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserReponsesCountAggregateInputType | true
    _min?: UserReponsesMinAggregateInputType
    _max?: UserReponsesMaxAggregateInputType
  }

  export type UserReponsesGroupByOutputType = {
    id: string
    formId: string
    jsonResponse: string
    createdAt: Date
    createdBy: string
    _count: UserReponsesCountAggregateOutputType | null
    _min: UserReponsesMinAggregateOutputType | null
    _max: UserReponsesMaxAggregateOutputType | null
  }

  type GetUserReponsesGroupByPayload<T extends UserReponsesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserReponsesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserReponsesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserReponsesGroupByOutputType[P]>
            : GetScalarType<T[P], UserReponsesGroupByOutputType[P]>
        }
      >
    >


  export type UserReponsesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    jsonResponse?: boolean
    createdAt?: boolean
    createdBy?: boolean
    form?: boolean | FormsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReponses"]>

  export type UserReponsesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    jsonResponse?: boolean
    createdAt?: boolean
    createdBy?: boolean
    form?: boolean | FormsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReponses"]>

  export type UserReponsesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    jsonResponse?: boolean
    createdAt?: boolean
    createdBy?: boolean
    form?: boolean | FormsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReponses"]>

  export type UserReponsesSelectScalar = {
    id?: boolean
    formId?: boolean
    jsonResponse?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type UserReponsesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formId" | "jsonResponse" | "createdAt" | "createdBy", ExtArgs["result"]["userReponses"]>
  export type UserReponsesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormsDefaultArgs<ExtArgs>
  }
  export type UserReponsesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormsDefaultArgs<ExtArgs>
  }
  export type UserReponsesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormsDefaultArgs<ExtArgs>
  }

  export type $UserReponsesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserReponses"
    objects: {
      form: Prisma.$FormsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formId: string
      jsonResponse: string
      createdAt: Date
      createdBy: string
    }, ExtArgs["result"]["userReponses"]>
    composites: {}
  }

  type UserReponsesGetPayload<S extends boolean | null | undefined | UserReponsesDefaultArgs> = $Result.GetResult<Prisma.$UserReponsesPayload, S>

  type UserReponsesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserReponsesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserReponsesCountAggregateInputType | true
    }

  export interface UserReponsesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserReponses'], meta: { name: 'UserReponses' } }
    /**
     * Find zero or one UserReponses that matches the filter.
     * @param {UserReponsesFindUniqueArgs} args - Arguments to find a UserReponses
     * @example
     * // Get one UserReponses
     * const userReponses = await prisma.userReponses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserReponsesFindUniqueArgs>(args: SelectSubset<T, UserReponsesFindUniqueArgs<ExtArgs>>): Prisma__UserReponsesClient<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserReponses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserReponsesFindUniqueOrThrowArgs} args - Arguments to find a UserReponses
     * @example
     * // Get one UserReponses
     * const userReponses = await prisma.userReponses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserReponsesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserReponsesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserReponsesClient<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReponsesFindFirstArgs} args - Arguments to find a UserReponses
     * @example
     * // Get one UserReponses
     * const userReponses = await prisma.userReponses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserReponsesFindFirstArgs>(args?: SelectSubset<T, UserReponsesFindFirstArgs<ExtArgs>>): Prisma__UserReponsesClient<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReponses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReponsesFindFirstOrThrowArgs} args - Arguments to find a UserReponses
     * @example
     * // Get one UserReponses
     * const userReponses = await prisma.userReponses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserReponsesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserReponsesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserReponsesClient<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserReponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReponsesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserReponses
     * const userReponses = await prisma.userReponses.findMany()
     * 
     * // Get first 10 UserReponses
     * const userReponses = await prisma.userReponses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userReponsesWithIdOnly = await prisma.userReponses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserReponsesFindManyArgs>(args?: SelectSubset<T, UserReponsesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserReponses.
     * @param {UserReponsesCreateArgs} args - Arguments to create a UserReponses.
     * @example
     * // Create one UserReponses
     * const UserReponses = await prisma.userReponses.create({
     *   data: {
     *     // ... data to create a UserReponses
     *   }
     * })
     * 
     */
    create<T extends UserReponsesCreateArgs>(args: SelectSubset<T, UserReponsesCreateArgs<ExtArgs>>): Prisma__UserReponsesClient<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserReponses.
     * @param {UserReponsesCreateManyArgs} args - Arguments to create many UserReponses.
     * @example
     * // Create many UserReponses
     * const userReponses = await prisma.userReponses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserReponsesCreateManyArgs>(args?: SelectSubset<T, UserReponsesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserReponses and returns the data saved in the database.
     * @param {UserReponsesCreateManyAndReturnArgs} args - Arguments to create many UserReponses.
     * @example
     * // Create many UserReponses
     * const userReponses = await prisma.userReponses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserReponses and only return the `id`
     * const userReponsesWithIdOnly = await prisma.userReponses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserReponsesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserReponsesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserReponses.
     * @param {UserReponsesDeleteArgs} args - Arguments to delete one UserReponses.
     * @example
     * // Delete one UserReponses
     * const UserReponses = await prisma.userReponses.delete({
     *   where: {
     *     // ... filter to delete one UserReponses
     *   }
     * })
     * 
     */
    delete<T extends UserReponsesDeleteArgs>(args: SelectSubset<T, UserReponsesDeleteArgs<ExtArgs>>): Prisma__UserReponsesClient<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserReponses.
     * @param {UserReponsesUpdateArgs} args - Arguments to update one UserReponses.
     * @example
     * // Update one UserReponses
     * const userReponses = await prisma.userReponses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserReponsesUpdateArgs>(args: SelectSubset<T, UserReponsesUpdateArgs<ExtArgs>>): Prisma__UserReponsesClient<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserReponses.
     * @param {UserReponsesDeleteManyArgs} args - Arguments to filter UserReponses to delete.
     * @example
     * // Delete a few UserReponses
     * const { count } = await prisma.userReponses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserReponsesDeleteManyArgs>(args?: SelectSubset<T, UserReponsesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserReponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReponsesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserReponses
     * const userReponses = await prisma.userReponses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserReponsesUpdateManyArgs>(args: SelectSubset<T, UserReponsesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserReponses and returns the data updated in the database.
     * @param {UserReponsesUpdateManyAndReturnArgs} args - Arguments to update many UserReponses.
     * @example
     * // Update many UserReponses
     * const userReponses = await prisma.userReponses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserReponses and only return the `id`
     * const userReponsesWithIdOnly = await prisma.userReponses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserReponsesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserReponsesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserReponses.
     * @param {UserReponsesUpsertArgs} args - Arguments to update or create a UserReponses.
     * @example
     * // Update or create a UserReponses
     * const userReponses = await prisma.userReponses.upsert({
     *   create: {
     *     // ... data to create a UserReponses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserReponses we want to update
     *   }
     * })
     */
    upsert<T extends UserReponsesUpsertArgs>(args: SelectSubset<T, UserReponsesUpsertArgs<ExtArgs>>): Prisma__UserReponsesClient<$Result.GetResult<Prisma.$UserReponsesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserReponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReponsesCountArgs} args - Arguments to filter UserReponses to count.
     * @example
     * // Count the number of UserReponses
     * const count = await prisma.userReponses.count({
     *   where: {
     *     // ... the filter for the UserReponses we want to count
     *   }
     * })
    **/
    count<T extends UserReponsesCountArgs>(
      args?: Subset<T, UserReponsesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserReponsesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserReponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReponsesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserReponsesAggregateArgs>(args: Subset<T, UserReponsesAggregateArgs>): Prisma.PrismaPromise<GetUserReponsesAggregateType<T>>

    /**
     * Group by UserReponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReponsesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserReponsesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserReponsesGroupByArgs['orderBy'] }
        : { orderBy?: UserReponsesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserReponsesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserReponsesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserReponses model
   */
  readonly fields: UserReponsesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserReponses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserReponsesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends FormsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormsDefaultArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserReponses model
   */
  interface UserReponsesFieldRefs {
    readonly id: FieldRef<"UserReponses", 'String'>
    readonly formId: FieldRef<"UserReponses", 'String'>
    readonly jsonResponse: FieldRef<"UserReponses", 'String'>
    readonly createdAt: FieldRef<"UserReponses", 'DateTime'>
    readonly createdBy: FieldRef<"UserReponses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserReponses findUnique
   */
  export type UserReponsesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesInclude<ExtArgs> | null
    /**
     * Filter, which UserReponses to fetch.
     */
    where: UserReponsesWhereUniqueInput
  }

  /**
   * UserReponses findUniqueOrThrow
   */
  export type UserReponsesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesInclude<ExtArgs> | null
    /**
     * Filter, which UserReponses to fetch.
     */
    where: UserReponsesWhereUniqueInput
  }

  /**
   * UserReponses findFirst
   */
  export type UserReponsesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesInclude<ExtArgs> | null
    /**
     * Filter, which UserReponses to fetch.
     */
    where?: UserReponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReponses to fetch.
     */
    orderBy?: UserReponsesOrderByWithRelationInput | UserReponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReponses.
     */
    cursor?: UserReponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReponses.
     */
    distinct?: UserReponsesScalarFieldEnum | UserReponsesScalarFieldEnum[]
  }

  /**
   * UserReponses findFirstOrThrow
   */
  export type UserReponsesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesInclude<ExtArgs> | null
    /**
     * Filter, which UserReponses to fetch.
     */
    where?: UserReponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReponses to fetch.
     */
    orderBy?: UserReponsesOrderByWithRelationInput | UserReponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReponses.
     */
    cursor?: UserReponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReponses.
     */
    distinct?: UserReponsesScalarFieldEnum | UserReponsesScalarFieldEnum[]
  }

  /**
   * UserReponses findMany
   */
  export type UserReponsesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesInclude<ExtArgs> | null
    /**
     * Filter, which UserReponses to fetch.
     */
    where?: UserReponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReponses to fetch.
     */
    orderBy?: UserReponsesOrderByWithRelationInput | UserReponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserReponses.
     */
    cursor?: UserReponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReponses.
     */
    skip?: number
    distinct?: UserReponsesScalarFieldEnum | UserReponsesScalarFieldEnum[]
  }

  /**
   * UserReponses create
   */
  export type UserReponsesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserReponses.
     */
    data: XOR<UserReponsesCreateInput, UserReponsesUncheckedCreateInput>
  }

  /**
   * UserReponses createMany
   */
  export type UserReponsesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserReponses.
     */
    data: UserReponsesCreateManyInput | UserReponsesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserReponses createManyAndReturn
   */
  export type UserReponsesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * The data used to create many UserReponses.
     */
    data: UserReponsesCreateManyInput | UserReponsesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserReponses update
   */
  export type UserReponsesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserReponses.
     */
    data: XOR<UserReponsesUpdateInput, UserReponsesUncheckedUpdateInput>
    /**
     * Choose, which UserReponses to update.
     */
    where: UserReponsesWhereUniqueInput
  }

  /**
   * UserReponses updateMany
   */
  export type UserReponsesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserReponses.
     */
    data: XOR<UserReponsesUpdateManyMutationInput, UserReponsesUncheckedUpdateManyInput>
    /**
     * Filter which UserReponses to update
     */
    where?: UserReponsesWhereInput
    /**
     * Limit how many UserReponses to update.
     */
    limit?: number
  }

  /**
   * UserReponses updateManyAndReturn
   */
  export type UserReponsesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * The data used to update UserReponses.
     */
    data: XOR<UserReponsesUpdateManyMutationInput, UserReponsesUncheckedUpdateManyInput>
    /**
     * Filter which UserReponses to update
     */
    where?: UserReponsesWhereInput
    /**
     * Limit how many UserReponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserReponses upsert
   */
  export type UserReponsesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserReponses to update in case it exists.
     */
    where: UserReponsesWhereUniqueInput
    /**
     * In case the UserReponses found by the `where` argument doesn't exist, create a new UserReponses with this data.
     */
    create: XOR<UserReponsesCreateInput, UserReponsesUncheckedCreateInput>
    /**
     * In case the UserReponses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserReponsesUpdateInput, UserReponsesUncheckedUpdateInput>
  }

  /**
   * UserReponses delete
   */
  export type UserReponsesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesInclude<ExtArgs> | null
    /**
     * Filter which UserReponses to delete.
     */
    where: UserReponsesWhereUniqueInput
  }

  /**
   * UserReponses deleteMany
   */
  export type UserReponsesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReponses to delete
     */
    where?: UserReponsesWhereInput
    /**
     * Limit how many UserReponses to delete.
     */
    limit?: number
  }

  /**
   * UserReponses without action
   */
  export type UserReponsesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReponses
     */
    select?: UserReponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReponses
     */
    omit?: UserReponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReponsesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FormsScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    jsonForm: 'jsonForm',
    createdAt: 'createdAt',
    formTheme: 'formTheme',
    formBackground: 'formBackground',
    formStyle: 'formStyle'
  };

  export type FormsScalarFieldEnum = (typeof FormsScalarFieldEnum)[keyof typeof FormsScalarFieldEnum]


  export const UserReponsesScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    jsonResponse: 'jsonResponse',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type UserReponsesScalarFieldEnum = (typeof UserReponsesScalarFieldEnum)[keyof typeof UserReponsesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type FormsWhereInput = {
    AND?: FormsWhereInput | FormsWhereInput[]
    OR?: FormsWhereInput[]
    NOT?: FormsWhereInput | FormsWhereInput[]
    id?: StringFilter<"Forms"> | string
    ownerId?: StringFilter<"Forms"> | string
    jsonForm?: StringFilter<"Forms"> | string
    createdAt?: DateTimeFilter<"Forms"> | Date | string
    formTheme?: StringFilter<"Forms"> | string
    formBackground?: StringFilter<"Forms"> | string
    formStyle?: StringFilter<"Forms"> | string
    responses?: UserReponsesListRelationFilter
  }

  export type FormsOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    jsonForm?: SortOrder
    createdAt?: SortOrder
    formTheme?: SortOrder
    formBackground?: SortOrder
    formStyle?: SortOrder
    responses?: UserReponsesOrderByRelationAggregateInput
  }

  export type FormsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormsWhereInput | FormsWhereInput[]
    OR?: FormsWhereInput[]
    NOT?: FormsWhereInput | FormsWhereInput[]
    ownerId?: StringFilter<"Forms"> | string
    jsonForm?: StringFilter<"Forms"> | string
    createdAt?: DateTimeFilter<"Forms"> | Date | string
    formTheme?: StringFilter<"Forms"> | string
    formBackground?: StringFilter<"Forms"> | string
    formStyle?: StringFilter<"Forms"> | string
    responses?: UserReponsesListRelationFilter
  }, "id">

  export type FormsOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    jsonForm?: SortOrder
    createdAt?: SortOrder
    formTheme?: SortOrder
    formBackground?: SortOrder
    formStyle?: SortOrder
    _count?: FormsCountOrderByAggregateInput
    _max?: FormsMaxOrderByAggregateInput
    _min?: FormsMinOrderByAggregateInput
  }

  export type FormsScalarWhereWithAggregatesInput = {
    AND?: FormsScalarWhereWithAggregatesInput | FormsScalarWhereWithAggregatesInput[]
    OR?: FormsScalarWhereWithAggregatesInput[]
    NOT?: FormsScalarWhereWithAggregatesInput | FormsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Forms"> | string
    ownerId?: StringWithAggregatesFilter<"Forms"> | string
    jsonForm?: StringWithAggregatesFilter<"Forms"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Forms"> | Date | string
    formTheme?: StringWithAggregatesFilter<"Forms"> | string
    formBackground?: StringWithAggregatesFilter<"Forms"> | string
    formStyle?: StringWithAggregatesFilter<"Forms"> | string
  }

  export type UserReponsesWhereInput = {
    AND?: UserReponsesWhereInput | UserReponsesWhereInput[]
    OR?: UserReponsesWhereInput[]
    NOT?: UserReponsesWhereInput | UserReponsesWhereInput[]
    id?: StringFilter<"UserReponses"> | string
    formId?: StringFilter<"UserReponses"> | string
    jsonResponse?: StringFilter<"UserReponses"> | string
    createdAt?: DateTimeFilter<"UserReponses"> | Date | string
    createdBy?: StringFilter<"UserReponses"> | string
    form?: XOR<FormsScalarRelationFilter, FormsWhereInput>
  }

  export type UserReponsesOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    jsonResponse?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    form?: FormsOrderByWithRelationInput
  }

  export type UserReponsesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserReponsesWhereInput | UserReponsesWhereInput[]
    OR?: UserReponsesWhereInput[]
    NOT?: UserReponsesWhereInput | UserReponsesWhereInput[]
    formId?: StringFilter<"UserReponses"> | string
    jsonResponse?: StringFilter<"UserReponses"> | string
    createdAt?: DateTimeFilter<"UserReponses"> | Date | string
    createdBy?: StringFilter<"UserReponses"> | string
    form?: XOR<FormsScalarRelationFilter, FormsWhereInput>
  }, "id">

  export type UserReponsesOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    jsonResponse?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    _count?: UserReponsesCountOrderByAggregateInput
    _max?: UserReponsesMaxOrderByAggregateInput
    _min?: UserReponsesMinOrderByAggregateInput
  }

  export type UserReponsesScalarWhereWithAggregatesInput = {
    AND?: UserReponsesScalarWhereWithAggregatesInput | UserReponsesScalarWhereWithAggregatesInput[]
    OR?: UserReponsesScalarWhereWithAggregatesInput[]
    NOT?: UserReponsesScalarWhereWithAggregatesInput | UserReponsesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserReponses"> | string
    formId?: StringWithAggregatesFilter<"UserReponses"> | string
    jsonResponse?: StringWithAggregatesFilter<"UserReponses"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserReponses"> | Date | string
    createdBy?: StringWithAggregatesFilter<"UserReponses"> | string
  }

  export type FormsCreateInput = {
    id?: string
    ownerId: string
    jsonForm: string
    createdAt?: Date | string
    formTheme?: string
    formBackground?: string
    formStyle?: string
    responses?: UserReponsesCreateNestedManyWithoutFormInput
  }

  export type FormsUncheckedCreateInput = {
    id?: string
    ownerId: string
    jsonForm: string
    createdAt?: Date | string
    formTheme?: string
    formBackground?: string
    formStyle?: string
    responses?: UserReponsesUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jsonForm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formTheme?: StringFieldUpdateOperationsInput | string
    formBackground?: StringFieldUpdateOperationsInput | string
    formStyle?: StringFieldUpdateOperationsInput | string
    responses?: UserReponsesUpdateManyWithoutFormNestedInput
  }

  export type FormsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jsonForm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formTheme?: StringFieldUpdateOperationsInput | string
    formBackground?: StringFieldUpdateOperationsInput | string
    formStyle?: StringFieldUpdateOperationsInput | string
    responses?: UserReponsesUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormsCreateManyInput = {
    id?: string
    ownerId: string
    jsonForm: string
    createdAt?: Date | string
    formTheme?: string
    formBackground?: string
    formStyle?: string
  }

  export type FormsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jsonForm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formTheme?: StringFieldUpdateOperationsInput | string
    formBackground?: StringFieldUpdateOperationsInput | string
    formStyle?: StringFieldUpdateOperationsInput | string
  }

  export type FormsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jsonForm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formTheme?: StringFieldUpdateOperationsInput | string
    formBackground?: StringFieldUpdateOperationsInput | string
    formStyle?: StringFieldUpdateOperationsInput | string
  }

  export type UserReponsesCreateInput = {
    id?: string
    jsonResponse: string
    createdAt?: Date | string
    createdBy?: string
    form: FormsCreateNestedOneWithoutResponsesInput
  }

  export type UserReponsesUncheckedCreateInput = {
    id?: string
    formId: string
    jsonResponse: string
    createdAt?: Date | string
    createdBy?: string
  }

  export type UserReponsesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jsonResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    form?: FormsUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type UserReponsesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    jsonResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserReponsesCreateManyInput = {
    id?: string
    formId: string
    jsonResponse: string
    createdAt?: Date | string
    createdBy?: string
  }

  export type UserReponsesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jsonResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserReponsesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    jsonResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserReponsesListRelationFilter = {
    every?: UserReponsesWhereInput
    some?: UserReponsesWhereInput
    none?: UserReponsesWhereInput
  }

  export type UserReponsesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormsCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    jsonForm?: SortOrder
    createdAt?: SortOrder
    formTheme?: SortOrder
    formBackground?: SortOrder
    formStyle?: SortOrder
  }

  export type FormsMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    jsonForm?: SortOrder
    createdAt?: SortOrder
    formTheme?: SortOrder
    formBackground?: SortOrder
    formStyle?: SortOrder
  }

  export type FormsMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    jsonForm?: SortOrder
    createdAt?: SortOrder
    formTheme?: SortOrder
    formBackground?: SortOrder
    formStyle?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FormsScalarRelationFilter = {
    is?: FormsWhereInput
    isNot?: FormsWhereInput
  }

  export type UserReponsesCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    jsonResponse?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type UserReponsesMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    jsonResponse?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type UserReponsesMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    jsonResponse?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type UserReponsesCreateNestedManyWithoutFormInput = {
    create?: XOR<UserReponsesCreateWithoutFormInput, UserReponsesUncheckedCreateWithoutFormInput> | UserReponsesCreateWithoutFormInput[] | UserReponsesUncheckedCreateWithoutFormInput[]
    connectOrCreate?: UserReponsesCreateOrConnectWithoutFormInput | UserReponsesCreateOrConnectWithoutFormInput[]
    createMany?: UserReponsesCreateManyFormInputEnvelope
    connect?: UserReponsesWhereUniqueInput | UserReponsesWhereUniqueInput[]
  }

  export type UserReponsesUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<UserReponsesCreateWithoutFormInput, UserReponsesUncheckedCreateWithoutFormInput> | UserReponsesCreateWithoutFormInput[] | UserReponsesUncheckedCreateWithoutFormInput[]
    connectOrCreate?: UserReponsesCreateOrConnectWithoutFormInput | UserReponsesCreateOrConnectWithoutFormInput[]
    createMany?: UserReponsesCreateManyFormInputEnvelope
    connect?: UserReponsesWhereUniqueInput | UserReponsesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserReponsesUpdateManyWithoutFormNestedInput = {
    create?: XOR<UserReponsesCreateWithoutFormInput, UserReponsesUncheckedCreateWithoutFormInput> | UserReponsesCreateWithoutFormInput[] | UserReponsesUncheckedCreateWithoutFormInput[]
    connectOrCreate?: UserReponsesCreateOrConnectWithoutFormInput | UserReponsesCreateOrConnectWithoutFormInput[]
    upsert?: UserReponsesUpsertWithWhereUniqueWithoutFormInput | UserReponsesUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: UserReponsesCreateManyFormInputEnvelope
    set?: UserReponsesWhereUniqueInput | UserReponsesWhereUniqueInput[]
    disconnect?: UserReponsesWhereUniqueInput | UserReponsesWhereUniqueInput[]
    delete?: UserReponsesWhereUniqueInput | UserReponsesWhereUniqueInput[]
    connect?: UserReponsesWhereUniqueInput | UserReponsesWhereUniqueInput[]
    update?: UserReponsesUpdateWithWhereUniqueWithoutFormInput | UserReponsesUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: UserReponsesUpdateManyWithWhereWithoutFormInput | UserReponsesUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: UserReponsesScalarWhereInput | UserReponsesScalarWhereInput[]
  }

  export type UserReponsesUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<UserReponsesCreateWithoutFormInput, UserReponsesUncheckedCreateWithoutFormInput> | UserReponsesCreateWithoutFormInput[] | UserReponsesUncheckedCreateWithoutFormInput[]
    connectOrCreate?: UserReponsesCreateOrConnectWithoutFormInput | UserReponsesCreateOrConnectWithoutFormInput[]
    upsert?: UserReponsesUpsertWithWhereUniqueWithoutFormInput | UserReponsesUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: UserReponsesCreateManyFormInputEnvelope
    set?: UserReponsesWhereUniqueInput | UserReponsesWhereUniqueInput[]
    disconnect?: UserReponsesWhereUniqueInput | UserReponsesWhereUniqueInput[]
    delete?: UserReponsesWhereUniqueInput | UserReponsesWhereUniqueInput[]
    connect?: UserReponsesWhereUniqueInput | UserReponsesWhereUniqueInput[]
    update?: UserReponsesUpdateWithWhereUniqueWithoutFormInput | UserReponsesUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: UserReponsesUpdateManyWithWhereWithoutFormInput | UserReponsesUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: UserReponsesScalarWhereInput | UserReponsesScalarWhereInput[]
  }

  export type FormsCreateNestedOneWithoutResponsesInput = {
    create?: XOR<FormsCreateWithoutResponsesInput, FormsUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormsCreateOrConnectWithoutResponsesInput
    connect?: FormsWhereUniqueInput
  }

  export type FormsUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<FormsCreateWithoutResponsesInput, FormsUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormsCreateOrConnectWithoutResponsesInput
    upsert?: FormsUpsertWithoutResponsesInput
    connect?: FormsWhereUniqueInput
    update?: XOR<XOR<FormsUpdateToOneWithWhereWithoutResponsesInput, FormsUpdateWithoutResponsesInput>, FormsUncheckedUpdateWithoutResponsesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserReponsesCreateWithoutFormInput = {
    id?: string
    jsonResponse: string
    createdAt?: Date | string
    createdBy?: string
  }

  export type UserReponsesUncheckedCreateWithoutFormInput = {
    id?: string
    jsonResponse: string
    createdAt?: Date | string
    createdBy?: string
  }

  export type UserReponsesCreateOrConnectWithoutFormInput = {
    where: UserReponsesWhereUniqueInput
    create: XOR<UserReponsesCreateWithoutFormInput, UserReponsesUncheckedCreateWithoutFormInput>
  }

  export type UserReponsesCreateManyFormInputEnvelope = {
    data: UserReponsesCreateManyFormInput | UserReponsesCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type UserReponsesUpsertWithWhereUniqueWithoutFormInput = {
    where: UserReponsesWhereUniqueInput
    update: XOR<UserReponsesUpdateWithoutFormInput, UserReponsesUncheckedUpdateWithoutFormInput>
    create: XOR<UserReponsesCreateWithoutFormInput, UserReponsesUncheckedCreateWithoutFormInput>
  }

  export type UserReponsesUpdateWithWhereUniqueWithoutFormInput = {
    where: UserReponsesWhereUniqueInput
    data: XOR<UserReponsesUpdateWithoutFormInput, UserReponsesUncheckedUpdateWithoutFormInput>
  }

  export type UserReponsesUpdateManyWithWhereWithoutFormInput = {
    where: UserReponsesScalarWhereInput
    data: XOR<UserReponsesUpdateManyMutationInput, UserReponsesUncheckedUpdateManyWithoutFormInput>
  }

  export type UserReponsesScalarWhereInput = {
    AND?: UserReponsesScalarWhereInput | UserReponsesScalarWhereInput[]
    OR?: UserReponsesScalarWhereInput[]
    NOT?: UserReponsesScalarWhereInput | UserReponsesScalarWhereInput[]
    id?: StringFilter<"UserReponses"> | string
    formId?: StringFilter<"UserReponses"> | string
    jsonResponse?: StringFilter<"UserReponses"> | string
    createdAt?: DateTimeFilter<"UserReponses"> | Date | string
    createdBy?: StringFilter<"UserReponses"> | string
  }

  export type FormsCreateWithoutResponsesInput = {
    id?: string
    ownerId: string
    jsonForm: string
    createdAt?: Date | string
    formTheme?: string
    formBackground?: string
    formStyle?: string
  }

  export type FormsUncheckedCreateWithoutResponsesInput = {
    id?: string
    ownerId: string
    jsonForm: string
    createdAt?: Date | string
    formTheme?: string
    formBackground?: string
    formStyle?: string
  }

  export type FormsCreateOrConnectWithoutResponsesInput = {
    where: FormsWhereUniqueInput
    create: XOR<FormsCreateWithoutResponsesInput, FormsUncheckedCreateWithoutResponsesInput>
  }

  export type FormsUpsertWithoutResponsesInput = {
    update: XOR<FormsUpdateWithoutResponsesInput, FormsUncheckedUpdateWithoutResponsesInput>
    create: XOR<FormsCreateWithoutResponsesInput, FormsUncheckedCreateWithoutResponsesInput>
    where?: FormsWhereInput
  }

  export type FormsUpdateToOneWithWhereWithoutResponsesInput = {
    where?: FormsWhereInput
    data: XOR<FormsUpdateWithoutResponsesInput, FormsUncheckedUpdateWithoutResponsesInput>
  }

  export type FormsUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jsonForm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formTheme?: StringFieldUpdateOperationsInput | string
    formBackground?: StringFieldUpdateOperationsInput | string
    formStyle?: StringFieldUpdateOperationsInput | string
  }

  export type FormsUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    jsonForm?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formTheme?: StringFieldUpdateOperationsInput | string
    formBackground?: StringFieldUpdateOperationsInput | string
    formStyle?: StringFieldUpdateOperationsInput | string
  }

  export type UserReponsesCreateManyFormInput = {
    id?: string
    jsonResponse: string
    createdAt?: Date | string
    createdBy?: string
  }

  export type UserReponsesUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    jsonResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserReponsesUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    jsonResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserReponsesUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    jsonResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}