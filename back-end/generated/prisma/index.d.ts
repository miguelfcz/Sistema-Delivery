
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Estabelecimento
 * 
 */
export type Estabelecimento = $Result.DefaultSelection<Prisma.$EstabelecimentoPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model PedidoItem
 * 
 */
export type PedidoItem = $Result.DefaultSelection<Prisma.$PedidoItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusPedido: {
  PENDENTE: 'PENDENTE',
  EM_PREPARO: 'EM_PREPARO',
  CONCLUIDO: 'CONCLUIDO',
  CANCELADO: 'CANCELADO'
};

export type StatusPedido = (typeof StatusPedido)[keyof typeof StatusPedido]

}

export type StatusPedido = $Enums.StatusPedido

export const StatusPedido: typeof $Enums.StatusPedido

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estabelecimento`: Exposes CRUD operations for the **Estabelecimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estabelecimentos
    * const estabelecimentos = await prisma.estabelecimento.findMany()
    * ```
    */
  get estabelecimento(): Prisma.EstabelecimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoItem`: Exposes CRUD operations for the **PedidoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidoItems
    * const pedidoItems = await prisma.pedidoItem.findMany()
    * ```
    */
  get pedidoItem(): Prisma.PedidoItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Usuario: 'Usuario',
    Estabelecimento: 'Estabelecimento',
    Produto: 'Produto',
    Pedido: 'Pedido',
    PedidoItem: 'PedidoItem'
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
      modelProps: "usuario" | "estabelecimento" | "produto" | "pedido" | "pedidoItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Estabelecimento: {
        payload: Prisma.$EstabelecimentoPayload<ExtArgs>
        fields: Prisma.EstabelecimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstabelecimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstabelecimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          findFirst: {
            args: Prisma.EstabelecimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstabelecimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          findMany: {
            args: Prisma.EstabelecimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>[]
          }
          create: {
            args: Prisma.EstabelecimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          createMany: {
            args: Prisma.EstabelecimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstabelecimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>[]
          }
          delete: {
            args: Prisma.EstabelecimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          update: {
            args: Prisma.EstabelecimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          deleteMany: {
            args: Prisma.EstabelecimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstabelecimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstabelecimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>[]
          }
          upsert: {
            args: Prisma.EstabelecimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          aggregate: {
            args: Prisma.EstabelecimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstabelecimento>
          }
          groupBy: {
            args: Prisma.EstabelecimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstabelecimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstabelecimentoCountArgs<ExtArgs>
            result: $Utils.Optional<EstabelecimentoCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      PedidoItem: {
        payload: Prisma.$PedidoItemPayload<ExtArgs>
        fields: Prisma.PedidoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          findFirst: {
            args: Prisma.PedidoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          findMany: {
            args: Prisma.PedidoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>[]
          }
          create: {
            args: Prisma.PedidoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          createMany: {
            args: Prisma.PedidoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>[]
          }
          delete: {
            args: Prisma.PedidoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          update: {
            args: Prisma.PedidoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          deleteMany: {
            args: Prisma.PedidoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>[]
          }
          upsert: {
            args: Prisma.PedidoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoItemPayload>
          }
          aggregate: {
            args: Prisma.PedidoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidoItem>
          }
          groupBy: {
            args: Prisma.PedidoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoItemCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoItemCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    usuario?: UsuarioOmit
    estabelecimento?: EstabelecimentoOmit
    produto?: ProdutoOmit
    pedido?: PedidoOmit
    pedidoItem?: PedidoItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    estabelecimentos: number
    pedidos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estabelecimentos?: boolean | UsuarioCountOutputTypeCountEstabelecimentosArgs
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEstabelecimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstabelecimentoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type EstabelecimentoCountOutputType
   */

  export type EstabelecimentoCountOutputType = {
    produtos: number
    pedidos: number
  }

  export type EstabelecimentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | EstabelecimentoCountOutputTypeCountProdutosArgs
    pedidos?: boolean | EstabelecimentoCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * EstabelecimentoCountOutputType without action
   */
  export type EstabelecimentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstabelecimentoCountOutputType
     */
    select?: EstabelecimentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstabelecimentoCountOutputType without action
   */
  export type EstabelecimentoCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }

  /**
   * EstabelecimentoCountOutputType without action
   */
  export type EstabelecimentoCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    itensDePedido: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensDePedido?: boolean | ProdutoCountOutputTypeCountItensDePedidoArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountItensDePedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoItemWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    itens: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | PedidoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    nome: string | null
    senha: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    nome: string | null
    senha: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    nome: number
    senha: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    nome: string
    senha: string
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estabelecimentos?: boolean | Usuario$estabelecimentosArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nome" | "senha" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estabelecimentos?: boolean | Usuario$estabelecimentosArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      estabelecimentos: Prisma.$EstabelecimentoPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      nome: string
      senha: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estabelecimentos<T extends Usuario$estabelecimentosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$estabelecimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.estabelecimentos
   */
  export type Usuario$estabelecimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    where?: EstabelecimentoWhereInput
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    cursor?: EstabelecimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstabelecimentoScalarFieldEnum | EstabelecimentoScalarFieldEnum[]
  }

  /**
   * Usuario.pedidos
   */
  export type Usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Estabelecimento
   */

  export type AggregateEstabelecimento = {
    _count: EstabelecimentoCountAggregateOutputType | null
    _avg: EstabelecimentoAvgAggregateOutputType | null
    _sum: EstabelecimentoSumAggregateOutputType | null
    _min: EstabelecimentoMinAggregateOutputType | null
    _max: EstabelecimentoMaxAggregateOutputType | null
  }

  export type EstabelecimentoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EstabelecimentoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EstabelecimentoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: number | null
  }

  export type EstabelecimentoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: number | null
  }

  export type EstabelecimentoCountAggregateOutputType = {
    id: number
    nome: number
    endereco: number
    ativo: number
    createdAt: number
    updatedAt: number
    usuarioId: number
    _all: number
  }


  export type EstabelecimentoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EstabelecimentoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EstabelecimentoMinAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type EstabelecimentoMaxAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type EstabelecimentoCountAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    _all?: true
  }

  export type EstabelecimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estabelecimento to aggregate.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estabelecimentos
    **/
    _count?: true | EstabelecimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstabelecimentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstabelecimentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstabelecimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstabelecimentoMaxAggregateInputType
  }

  export type GetEstabelecimentoAggregateType<T extends EstabelecimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstabelecimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstabelecimento[P]>
      : GetScalarType<T[P], AggregateEstabelecimento[P]>
  }




  export type EstabelecimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstabelecimentoWhereInput
    orderBy?: EstabelecimentoOrderByWithAggregationInput | EstabelecimentoOrderByWithAggregationInput[]
    by: EstabelecimentoScalarFieldEnum[] | EstabelecimentoScalarFieldEnum
    having?: EstabelecimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstabelecimentoCountAggregateInputType | true
    _avg?: EstabelecimentoAvgAggregateInputType
    _sum?: EstabelecimentoSumAggregateInputType
    _min?: EstabelecimentoMinAggregateInputType
    _max?: EstabelecimentoMaxAggregateInputType
  }

  export type EstabelecimentoGroupByOutputType = {
    id: number
    nome: string
    endereco: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    usuarioId: number
    _count: EstabelecimentoCountAggregateOutputType | null
    _avg: EstabelecimentoAvgAggregateOutputType | null
    _sum: EstabelecimentoSumAggregateOutputType | null
    _min: EstabelecimentoMinAggregateOutputType | null
    _max: EstabelecimentoMaxAggregateOutputType | null
  }

  type GetEstabelecimentoGroupByPayload<T extends EstabelecimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstabelecimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstabelecimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstabelecimentoGroupByOutputType[P]>
            : GetScalarType<T[P], EstabelecimentoGroupByOutputType[P]>
        }
      >
    >


  export type EstabelecimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    produtos?: boolean | Estabelecimento$produtosArgs<ExtArgs>
    pedidos?: boolean | Estabelecimento$pedidosArgs<ExtArgs>
    _count?: boolean | EstabelecimentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estabelecimento"]>

  export type EstabelecimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estabelecimento"]>

  export type EstabelecimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estabelecimento"]>

  export type EstabelecimentoSelectScalar = {
    id?: boolean
    nome?: boolean
    endereco?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
  }

  export type EstabelecimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "endereco" | "ativo" | "createdAt" | "updatedAt" | "usuarioId", ExtArgs["result"]["estabelecimento"]>
  export type EstabelecimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    produtos?: boolean | Estabelecimento$produtosArgs<ExtArgs>
    pedidos?: boolean | Estabelecimento$pedidosArgs<ExtArgs>
    _count?: boolean | EstabelecimentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstabelecimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EstabelecimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $EstabelecimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estabelecimento"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      produtos: Prisma.$ProdutoPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      endereco: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
      usuarioId: number
    }, ExtArgs["result"]["estabelecimento"]>
    composites: {}
  }

  type EstabelecimentoGetPayload<S extends boolean | null | undefined | EstabelecimentoDefaultArgs> = $Result.GetResult<Prisma.$EstabelecimentoPayload, S>

  type EstabelecimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstabelecimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstabelecimentoCountAggregateInputType | true
    }

  export interface EstabelecimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estabelecimento'], meta: { name: 'Estabelecimento' } }
    /**
     * Find zero or one Estabelecimento that matches the filter.
     * @param {EstabelecimentoFindUniqueArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstabelecimentoFindUniqueArgs>(args: SelectSubset<T, EstabelecimentoFindUniqueArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estabelecimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstabelecimentoFindUniqueOrThrowArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstabelecimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, EstabelecimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estabelecimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoFindFirstArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstabelecimentoFindFirstArgs>(args?: SelectSubset<T, EstabelecimentoFindFirstArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estabelecimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoFindFirstOrThrowArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstabelecimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, EstabelecimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estabelecimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estabelecimentos
     * const estabelecimentos = await prisma.estabelecimento.findMany()
     * 
     * // Get first 10 Estabelecimentos
     * const estabelecimentos = await prisma.estabelecimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estabelecimentoWithIdOnly = await prisma.estabelecimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstabelecimentoFindManyArgs>(args?: SelectSubset<T, EstabelecimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estabelecimento.
     * @param {EstabelecimentoCreateArgs} args - Arguments to create a Estabelecimento.
     * @example
     * // Create one Estabelecimento
     * const Estabelecimento = await prisma.estabelecimento.create({
     *   data: {
     *     // ... data to create a Estabelecimento
     *   }
     * })
     * 
     */
    create<T extends EstabelecimentoCreateArgs>(args: SelectSubset<T, EstabelecimentoCreateArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estabelecimentos.
     * @param {EstabelecimentoCreateManyArgs} args - Arguments to create many Estabelecimentos.
     * @example
     * // Create many Estabelecimentos
     * const estabelecimento = await prisma.estabelecimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstabelecimentoCreateManyArgs>(args?: SelectSubset<T, EstabelecimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estabelecimentos and returns the data saved in the database.
     * @param {EstabelecimentoCreateManyAndReturnArgs} args - Arguments to create many Estabelecimentos.
     * @example
     * // Create many Estabelecimentos
     * const estabelecimento = await prisma.estabelecimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estabelecimentos and only return the `id`
     * const estabelecimentoWithIdOnly = await prisma.estabelecimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstabelecimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, EstabelecimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estabelecimento.
     * @param {EstabelecimentoDeleteArgs} args - Arguments to delete one Estabelecimento.
     * @example
     * // Delete one Estabelecimento
     * const Estabelecimento = await prisma.estabelecimento.delete({
     *   where: {
     *     // ... filter to delete one Estabelecimento
     *   }
     * })
     * 
     */
    delete<T extends EstabelecimentoDeleteArgs>(args: SelectSubset<T, EstabelecimentoDeleteArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estabelecimento.
     * @param {EstabelecimentoUpdateArgs} args - Arguments to update one Estabelecimento.
     * @example
     * // Update one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstabelecimentoUpdateArgs>(args: SelectSubset<T, EstabelecimentoUpdateArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estabelecimentos.
     * @param {EstabelecimentoDeleteManyArgs} args - Arguments to filter Estabelecimentos to delete.
     * @example
     * // Delete a few Estabelecimentos
     * const { count } = await prisma.estabelecimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstabelecimentoDeleteManyArgs>(args?: SelectSubset<T, EstabelecimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estabelecimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estabelecimentos
     * const estabelecimento = await prisma.estabelecimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstabelecimentoUpdateManyArgs>(args: SelectSubset<T, EstabelecimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estabelecimentos and returns the data updated in the database.
     * @param {EstabelecimentoUpdateManyAndReturnArgs} args - Arguments to update many Estabelecimentos.
     * @example
     * // Update many Estabelecimentos
     * const estabelecimento = await prisma.estabelecimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estabelecimentos and only return the `id`
     * const estabelecimentoWithIdOnly = await prisma.estabelecimento.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstabelecimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, EstabelecimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estabelecimento.
     * @param {EstabelecimentoUpsertArgs} args - Arguments to update or create a Estabelecimento.
     * @example
     * // Update or create a Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.upsert({
     *   create: {
     *     // ... data to create a Estabelecimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estabelecimento we want to update
     *   }
     * })
     */
    upsert<T extends EstabelecimentoUpsertArgs>(args: SelectSubset<T, EstabelecimentoUpsertArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estabelecimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoCountArgs} args - Arguments to filter Estabelecimentos to count.
     * @example
     * // Count the number of Estabelecimentos
     * const count = await prisma.estabelecimento.count({
     *   where: {
     *     // ... the filter for the Estabelecimentos we want to count
     *   }
     * })
    **/
    count<T extends EstabelecimentoCountArgs>(
      args?: Subset<T, EstabelecimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstabelecimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estabelecimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstabelecimentoAggregateArgs>(args: Subset<T, EstabelecimentoAggregateArgs>): Prisma.PrismaPromise<GetEstabelecimentoAggregateType<T>>

    /**
     * Group by Estabelecimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoGroupByArgs} args - Group by arguments.
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
      T extends EstabelecimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstabelecimentoGroupByArgs['orderBy'] }
        : { orderBy?: EstabelecimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstabelecimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstabelecimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estabelecimento model
   */
  readonly fields: EstabelecimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estabelecimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstabelecimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produtos<T extends Estabelecimento$produtosArgs<ExtArgs> = {}>(args?: Subset<T, Estabelecimento$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Estabelecimento$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Estabelecimento$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estabelecimento model
   */
  interface EstabelecimentoFieldRefs {
    readonly id: FieldRef<"Estabelecimento", 'Int'>
    readonly nome: FieldRef<"Estabelecimento", 'String'>
    readonly endereco: FieldRef<"Estabelecimento", 'String'>
    readonly ativo: FieldRef<"Estabelecimento", 'Boolean'>
    readonly createdAt: FieldRef<"Estabelecimento", 'DateTime'>
    readonly updatedAt: FieldRef<"Estabelecimento", 'DateTime'>
    readonly usuarioId: FieldRef<"Estabelecimento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Estabelecimento findUnique
   */
  export type EstabelecimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where: EstabelecimentoWhereUniqueInput
  }

  /**
   * Estabelecimento findUniqueOrThrow
   */
  export type EstabelecimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where: EstabelecimentoWhereUniqueInput
  }

  /**
   * Estabelecimento findFirst
   */
  export type EstabelecimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estabelecimentos.
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estabelecimentos.
     */
    distinct?: EstabelecimentoScalarFieldEnum | EstabelecimentoScalarFieldEnum[]
  }

  /**
   * Estabelecimento findFirstOrThrow
   */
  export type EstabelecimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estabelecimentos.
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estabelecimentos.
     */
    distinct?: EstabelecimentoScalarFieldEnum | EstabelecimentoScalarFieldEnum[]
  }

  /**
   * Estabelecimento findMany
   */
  export type EstabelecimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter, which Estabelecimentos to fetch.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estabelecimentos.
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    distinct?: EstabelecimentoScalarFieldEnum | EstabelecimentoScalarFieldEnum[]
  }

  /**
   * Estabelecimento create
   */
  export type EstabelecimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Estabelecimento.
     */
    data: XOR<EstabelecimentoCreateInput, EstabelecimentoUncheckedCreateInput>
  }

  /**
   * Estabelecimento createMany
   */
  export type EstabelecimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estabelecimentos.
     */
    data: EstabelecimentoCreateManyInput | EstabelecimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estabelecimento createManyAndReturn
   */
  export type EstabelecimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * The data used to create many Estabelecimentos.
     */
    data: EstabelecimentoCreateManyInput | EstabelecimentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estabelecimento update
   */
  export type EstabelecimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Estabelecimento.
     */
    data: XOR<EstabelecimentoUpdateInput, EstabelecimentoUncheckedUpdateInput>
    /**
     * Choose, which Estabelecimento to update.
     */
    where: EstabelecimentoWhereUniqueInput
  }

  /**
   * Estabelecimento updateMany
   */
  export type EstabelecimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estabelecimentos.
     */
    data: XOR<EstabelecimentoUpdateManyMutationInput, EstabelecimentoUncheckedUpdateManyInput>
    /**
     * Filter which Estabelecimentos to update
     */
    where?: EstabelecimentoWhereInput
    /**
     * Limit how many Estabelecimentos to update.
     */
    limit?: number
  }

  /**
   * Estabelecimento updateManyAndReturn
   */
  export type EstabelecimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * The data used to update Estabelecimentos.
     */
    data: XOR<EstabelecimentoUpdateManyMutationInput, EstabelecimentoUncheckedUpdateManyInput>
    /**
     * Filter which Estabelecimentos to update
     */
    where?: EstabelecimentoWhereInput
    /**
     * Limit how many Estabelecimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estabelecimento upsert
   */
  export type EstabelecimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Estabelecimento to update in case it exists.
     */
    where: EstabelecimentoWhereUniqueInput
    /**
     * In case the Estabelecimento found by the `where` argument doesn't exist, create a new Estabelecimento with this data.
     */
    create: XOR<EstabelecimentoCreateInput, EstabelecimentoUncheckedCreateInput>
    /**
     * In case the Estabelecimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstabelecimentoUpdateInput, EstabelecimentoUncheckedUpdateInput>
  }

  /**
   * Estabelecimento delete
   */
  export type EstabelecimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
    /**
     * Filter which Estabelecimento to delete.
     */
    where: EstabelecimentoWhereUniqueInput
  }

  /**
   * Estabelecimento deleteMany
   */
  export type EstabelecimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estabelecimentos to delete
     */
    where?: EstabelecimentoWhereInput
    /**
     * Limit how many Estabelecimentos to delete.
     */
    limit?: number
  }

  /**
   * Estabelecimento.produtos
   */
  export type Estabelecimento$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Estabelecimento.pedidos
   */
  export type Estabelecimento$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Estabelecimento without action
   */
  export type EstabelecimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estabelecimento
     */
    omit?: EstabelecimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstabelecimentoInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    preco: number | null
    estabelecimentoId: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    preco: number | null
    estabelecimentoId: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    createdAt: Date | null
    updatedAt: Date | null
    estabelecimentoId: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    createdAt: Date | null
    updatedAt: Date | null
    estabelecimentoId: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    preco: number
    createdAt: number
    updatedAt: number
    estabelecimentoId: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    preco?: true
    estabelecimentoId?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    preco?: true
    estabelecimentoId?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    createdAt?: true
    updatedAt?: true
    estabelecimentoId?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    createdAt?: true
    updatedAt?: true
    estabelecimentoId?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    createdAt?: true
    updatedAt?: true
    estabelecimentoId?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    preco: number
    createdAt: Date
    updatedAt: Date
    estabelecimentoId: number
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estabelecimentoId?: boolean
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
    itensDePedido?: boolean | Produto$itensDePedidoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estabelecimentoId?: boolean
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estabelecimentoId?: boolean
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    estabelecimentoId?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "preco" | "createdAt" | "updatedAt" | "estabelecimentoId", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
    itensDePedido?: boolean | Produto$itensDePedidoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      estabelecimento: Prisma.$EstabelecimentoPayload<ExtArgs>
      itensDePedido: Prisma.$PedidoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      preco: number
      createdAt: Date
      updatedAt: Date
      estabelecimentoId: number
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estabelecimento<T extends EstabelecimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstabelecimentoDefaultArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itensDePedido<T extends Produto$itensDePedidoArgs<ExtArgs> = {}>(args?: Subset<T, Produto$itensDePedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly preco: FieldRef<"Produto", 'Float'>
    readonly createdAt: FieldRef<"Produto", 'DateTime'>
    readonly updatedAt: FieldRef<"Produto", 'DateTime'>
    readonly estabelecimentoId: FieldRef<"Produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.itensDePedido
   */
  export type Produto$itensDePedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    where?: PedidoItemWhereInput
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    cursor?: PedidoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    total: number | null
    usuarioId: number | null
    estabelecimentoId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    total: number | null
    usuarioId: number | null
    estabelecimentoId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    total: number | null
    mesa: string | null
    status: $Enums.StatusPedido | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: number | null
    estabelecimentoId: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    total: number | null
    mesa: string | null
    status: $Enums.StatusPedido | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: number | null
    estabelecimentoId: number | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    total: number
    mesa: number
    status: number
    createdAt: number
    updatedAt: number
    usuarioId: number
    estabelecimentoId: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    total?: true
    usuarioId?: true
    estabelecimentoId?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    total?: true
    usuarioId?: true
    estabelecimentoId?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    total?: true
    mesa?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    estabelecimentoId?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    total?: true
    mesa?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    estabelecimentoId?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    total?: true
    mesa?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    estabelecimentoId?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    total: number
    mesa: string
    status: $Enums.StatusPedido
    createdAt: Date
    updatedAt: Date
    usuarioId: number
    estabelecimentoId: number
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    mesa?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    estabelecimentoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    mesa?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    estabelecimentoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    mesa?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    estabelecimentoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    total?: boolean
    mesa?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    estabelecimentoId?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total" | "mesa" | "status" | "createdAt" | "updatedAt" | "usuarioId" | "estabelecimentoId", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    estabelecimento?: boolean | EstabelecimentoDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      estabelecimento: Prisma.$EstabelecimentoPayload<ExtArgs>
      itens: Prisma.$PedidoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total: number
      mesa: string
      status: $Enums.StatusPedido
      createdAt: Date
      updatedAt: Date
      usuarioId: number
      estabelecimentoId: number
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
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
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
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
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estabelecimento<T extends EstabelecimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstabelecimentoDefaultArgs<ExtArgs>>): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Pedido$itensArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly total: FieldRef<"Pedido", 'Float'>
    readonly mesa: FieldRef<"Pedido", 'String'>
    readonly status: FieldRef<"Pedido", 'StatusPedido'>
    readonly createdAt: FieldRef<"Pedido", 'DateTime'>
    readonly updatedAt: FieldRef<"Pedido", 'DateTime'>
    readonly usuarioId: FieldRef<"Pedido", 'Int'>
    readonly estabelecimentoId: FieldRef<"Pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.itens
   */
  export type Pedido$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    where?: PedidoItemWhereInput
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    cursor?: PedidoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model PedidoItem
   */

  export type AggregatePedidoItem = {
    _count: PedidoItemCountAggregateOutputType | null
    _avg: PedidoItemAvgAggregateOutputType | null
    _sum: PedidoItemSumAggregateOutputType | null
    _min: PedidoItemMinAggregateOutputType | null
    _max: PedidoItemMaxAggregateOutputType | null
  }

  export type PedidoItemAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: number | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type PedidoItemSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: number | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type PedidoItemMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: number | null
    pedidoId: number | null
    produtoId: number | null
    createdAt: Date | null
  }

  export type PedidoItemMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: number | null
    pedidoId: number | null
    produtoId: number | null
    createdAt: Date | null
  }

  export type PedidoItemCountAggregateOutputType = {
    id: number
    quantidade: number
    precoUnitario: number
    pedidoId: number
    produtoId: number
    createdAt: number
    _all: number
  }


  export type PedidoItemAvgAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
  }

  export type PedidoItemSumAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
  }

  export type PedidoItemMinAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
    createdAt?: true
  }

  export type PedidoItemMaxAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
    createdAt?: true
  }

  export type PedidoItemCountAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
    createdAt?: true
    _all?: true
  }

  export type PedidoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoItem to aggregate.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidoItems
    **/
    _count?: true | PedidoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoItemMaxAggregateInputType
  }

  export type GetPedidoItemAggregateType<T extends PedidoItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoItem[P]>
      : GetScalarType<T[P], AggregatePedidoItem[P]>
  }




  export type PedidoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoItemWhereInput
    orderBy?: PedidoItemOrderByWithAggregationInput | PedidoItemOrderByWithAggregationInput[]
    by: PedidoItemScalarFieldEnum[] | PedidoItemScalarFieldEnum
    having?: PedidoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoItemCountAggregateInputType | true
    _avg?: PedidoItemAvgAggregateInputType
    _sum?: PedidoItemSumAggregateInputType
    _min?: PedidoItemMinAggregateInputType
    _max?: PedidoItemMaxAggregateInputType
  }

  export type PedidoItemGroupByOutputType = {
    id: number
    quantidade: number
    precoUnitario: number
    pedidoId: number
    produtoId: number
    createdAt: Date
    _count: PedidoItemCountAggregateOutputType | null
    _avg: PedidoItemAvgAggregateOutputType | null
    _sum: PedidoItemSumAggregateOutputType | null
    _min: PedidoItemMinAggregateOutputType | null
    _max: PedidoItemMaxAggregateOutputType | null
  }

  type GetPedidoItemGroupByPayload<T extends PedidoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoItemGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoItemGroupByOutputType[P]>
        }
      >
    >


  export type PedidoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    createdAt?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoItem"]>

  export type PedidoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    createdAt?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoItem"]>

  export type PedidoItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    createdAt?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoItem"]>

  export type PedidoItemSelectScalar = {
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    createdAt?: boolean
  }

  export type PedidoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "precoUnitario" | "pedidoId" | "produtoId" | "createdAt", ExtArgs["result"]["pedidoItem"]>
  export type PedidoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type PedidoItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type PedidoItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $PedidoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidoItem"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      precoUnitario: number
      pedidoId: number
      produtoId: number
      createdAt: Date
    }, ExtArgs["result"]["pedidoItem"]>
    composites: {}
  }

  type PedidoItemGetPayload<S extends boolean | null | undefined | PedidoItemDefaultArgs> = $Result.GetResult<Prisma.$PedidoItemPayload, S>

  type PedidoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoItemCountAggregateInputType | true
    }

  export interface PedidoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidoItem'], meta: { name: 'PedidoItem' } }
    /**
     * Find zero or one PedidoItem that matches the filter.
     * @param {PedidoItemFindUniqueArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoItemFindUniqueArgs>(args: SelectSubset<T, PedidoItemFindUniqueArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoItemFindUniqueOrThrowArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemFindFirstArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoItemFindFirstArgs>(args?: SelectSubset<T, PedidoItemFindFirstArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemFindFirstOrThrowArgs} args - Arguments to find a PedidoItem
     * @example
     * // Get one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoItems
     * const pedidoItems = await prisma.pedidoItem.findMany()
     * 
     * // Get first 10 PedidoItems
     * const pedidoItems = await prisma.pedidoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoItemWithIdOnly = await prisma.pedidoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoItemFindManyArgs>(args?: SelectSubset<T, PedidoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidoItem.
     * @param {PedidoItemCreateArgs} args - Arguments to create a PedidoItem.
     * @example
     * // Create one PedidoItem
     * const PedidoItem = await prisma.pedidoItem.create({
     *   data: {
     *     // ... data to create a PedidoItem
     *   }
     * })
     * 
     */
    create<T extends PedidoItemCreateArgs>(args: SelectSubset<T, PedidoItemCreateArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidoItems.
     * @param {PedidoItemCreateManyArgs} args - Arguments to create many PedidoItems.
     * @example
     * // Create many PedidoItems
     * const pedidoItem = await prisma.pedidoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoItemCreateManyArgs>(args?: SelectSubset<T, PedidoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PedidoItems and returns the data saved in the database.
     * @param {PedidoItemCreateManyAndReturnArgs} args - Arguments to create many PedidoItems.
     * @example
     * // Create many PedidoItems
     * const pedidoItem = await prisma.pedidoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PedidoItems and only return the `id`
     * const pedidoItemWithIdOnly = await prisma.pedidoItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PedidoItem.
     * @param {PedidoItemDeleteArgs} args - Arguments to delete one PedidoItem.
     * @example
     * // Delete one PedidoItem
     * const PedidoItem = await prisma.pedidoItem.delete({
     *   where: {
     *     // ... filter to delete one PedidoItem
     *   }
     * })
     * 
     */
    delete<T extends PedidoItemDeleteArgs>(args: SelectSubset<T, PedidoItemDeleteArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidoItem.
     * @param {PedidoItemUpdateArgs} args - Arguments to update one PedidoItem.
     * @example
     * // Update one PedidoItem
     * const pedidoItem = await prisma.pedidoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoItemUpdateArgs>(args: SelectSubset<T, PedidoItemUpdateArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidoItems.
     * @param {PedidoItemDeleteManyArgs} args - Arguments to filter PedidoItems to delete.
     * @example
     * // Delete a few PedidoItems
     * const { count } = await prisma.pedidoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoItemDeleteManyArgs>(args?: SelectSubset<T, PedidoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoItems
     * const pedidoItem = await prisma.pedidoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoItemUpdateManyArgs>(args: SelectSubset<T, PedidoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoItems and returns the data updated in the database.
     * @param {PedidoItemUpdateManyAndReturnArgs} args - Arguments to update many PedidoItems.
     * @example
     * // Update many PedidoItems
     * const pedidoItem = await prisma.pedidoItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PedidoItems and only return the `id`
     * const pedidoItemWithIdOnly = await prisma.pedidoItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends PedidoItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PedidoItem.
     * @param {PedidoItemUpsertArgs} args - Arguments to update or create a PedidoItem.
     * @example
     * // Update or create a PedidoItem
     * const pedidoItem = await prisma.pedidoItem.upsert({
     *   create: {
     *     // ... data to create a PedidoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoItem we want to update
     *   }
     * })
     */
    upsert<T extends PedidoItemUpsertArgs>(args: SelectSubset<T, PedidoItemUpsertArgs<ExtArgs>>): Prisma__PedidoItemClient<$Result.GetResult<Prisma.$PedidoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemCountArgs} args - Arguments to filter PedidoItems to count.
     * @example
     * // Count the number of PedidoItems
     * const count = await prisma.pedidoItem.count({
     *   where: {
     *     // ... the filter for the PedidoItems we want to count
     *   }
     * })
    **/
    count<T extends PedidoItemCountArgs>(
      args?: Subset<T, PedidoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoItemAggregateArgs>(args: Subset<T, PedidoItemAggregateArgs>): Prisma.PrismaPromise<GetPedidoItemAggregateType<T>>

    /**
     * Group by PedidoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoItemGroupByArgs} args - Group by arguments.
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
      T extends PedidoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoItemGroupByArgs['orderBy'] }
        : { orderBy?: PedidoItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidoItem model
   */
  readonly fields: PedidoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PedidoItem model
   */
  interface PedidoItemFieldRefs {
    readonly id: FieldRef<"PedidoItem", 'Int'>
    readonly quantidade: FieldRef<"PedidoItem", 'Int'>
    readonly precoUnitario: FieldRef<"PedidoItem", 'Float'>
    readonly pedidoId: FieldRef<"PedidoItem", 'Int'>
    readonly produtoId: FieldRef<"PedidoItem", 'Int'>
    readonly createdAt: FieldRef<"PedidoItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PedidoItem findUnique
   */
  export type PedidoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem findUniqueOrThrow
   */
  export type PedidoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem findFirst
   */
  export type PedidoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoItems.
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoItems.
     */
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * PedidoItem findFirstOrThrow
   */
  export type PedidoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItem to fetch.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoItems.
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoItems.
     */
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * PedidoItem findMany
   */
  export type PedidoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter, which PedidoItems to fetch.
     */
    where?: PedidoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoItems to fetch.
     */
    orderBy?: PedidoItemOrderByWithRelationInput | PedidoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidoItems.
     */
    cursor?: PedidoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoItems.
     */
    skip?: number
    distinct?: PedidoItemScalarFieldEnum | PedidoItemScalarFieldEnum[]
  }

  /**
   * PedidoItem create
   */
  export type PedidoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidoItem.
     */
    data: XOR<PedidoItemCreateInput, PedidoItemUncheckedCreateInput>
  }

  /**
   * PedidoItem createMany
   */
  export type PedidoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidoItems.
     */
    data: PedidoItemCreateManyInput | PedidoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoItem createManyAndReturn
   */
  export type PedidoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * The data used to create many PedidoItems.
     */
    data: PedidoItemCreateManyInput | PedidoItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoItem update
   */
  export type PedidoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidoItem.
     */
    data: XOR<PedidoItemUpdateInput, PedidoItemUncheckedUpdateInput>
    /**
     * Choose, which PedidoItem to update.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem updateMany
   */
  export type PedidoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidoItems.
     */
    data: XOR<PedidoItemUpdateManyMutationInput, PedidoItemUncheckedUpdateManyInput>
    /**
     * Filter which PedidoItems to update
     */
    where?: PedidoItemWhereInput
    /**
     * Limit how many PedidoItems to update.
     */
    limit?: number
  }

  /**
   * PedidoItem updateManyAndReturn
   */
  export type PedidoItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * The data used to update PedidoItems.
     */
    data: XOR<PedidoItemUpdateManyMutationInput, PedidoItemUncheckedUpdateManyInput>
    /**
     * Filter which PedidoItems to update
     */
    where?: PedidoItemWhereInput
    /**
     * Limit how many PedidoItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoItem upsert
   */
  export type PedidoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidoItem to update in case it exists.
     */
    where: PedidoItemWhereUniqueInput
    /**
     * In case the PedidoItem found by the `where` argument doesn't exist, create a new PedidoItem with this data.
     */
    create: XOR<PedidoItemCreateInput, PedidoItemUncheckedCreateInput>
    /**
     * In case the PedidoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoItemUpdateInput, PedidoItemUncheckedUpdateInput>
  }

  /**
   * PedidoItem delete
   */
  export type PedidoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
    /**
     * Filter which PedidoItem to delete.
     */
    where: PedidoItemWhereUniqueInput
  }

  /**
   * PedidoItem deleteMany
   */
  export type PedidoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoItems to delete
     */
    where?: PedidoItemWhereInput
    /**
     * Limit how many PedidoItems to delete.
     */
    limit?: number
  }

  /**
   * PedidoItem without action
   */
  export type PedidoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoItem
     */
    select?: PedidoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoItem
     */
    omit?: PedidoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoItemInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nome: 'nome',
    senha: 'senha',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EstabelecimentoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    endereco: 'endereco',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usuarioId: 'usuarioId'
  };

  export type EstabelecimentoScalarFieldEnum = (typeof EstabelecimentoScalarFieldEnum)[keyof typeof EstabelecimentoScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    preco: 'preco',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    estabelecimentoId: 'estabelecimentoId'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    total: 'total',
    mesa: 'mesa',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usuarioId: 'usuarioId',
    estabelecimentoId: 'estabelecimentoId'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const PedidoItemScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    precoUnitario: 'precoUnitario',
    pedidoId: 'pedidoId',
    produtoId: 'produtoId',
    createdAt: 'createdAt'
  };

  export type PedidoItemScalarFieldEnum = (typeof PedidoItemScalarFieldEnum)[keyof typeof PedidoItemScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'StatusPedido'
   */
  export type EnumStatusPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPedido'>
    


  /**
   * Reference to a field of type 'StatusPedido[]'
   */
  export type ListEnumStatusPedidoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPedido[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    estabelecimentos?: EstabelecimentoListRelationFilter
    pedidos?: PedidoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estabelecimentos?: EstabelecimentoOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    estabelecimentos?: EstabelecimentoListRelationFilter
    pedidos?: PedidoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type EstabelecimentoWhereInput = {
    AND?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    OR?: EstabelecimentoWhereInput[]
    NOT?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    id?: IntFilter<"Estabelecimento"> | number
    nome?: StringFilter<"Estabelecimento"> | string
    endereco?: StringNullableFilter<"Estabelecimento"> | string | null
    ativo?: BoolFilter<"Estabelecimento"> | boolean
    createdAt?: DateTimeFilter<"Estabelecimento"> | Date | string
    updatedAt?: DateTimeFilter<"Estabelecimento"> | Date | string
    usuarioId?: IntFilter<"Estabelecimento"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    produtos?: ProdutoListRelationFilter
    pedidos?: PedidoListRelationFilter
  }

  export type EstabelecimentoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    produtos?: ProdutoOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type EstabelecimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    OR?: EstabelecimentoWhereInput[]
    NOT?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    nome?: StringFilter<"Estabelecimento"> | string
    endereco?: StringNullableFilter<"Estabelecimento"> | string | null
    ativo?: BoolFilter<"Estabelecimento"> | boolean
    createdAt?: DateTimeFilter<"Estabelecimento"> | Date | string
    updatedAt?: DateTimeFilter<"Estabelecimento"> | Date | string
    usuarioId?: IntFilter<"Estabelecimento"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    produtos?: ProdutoListRelationFilter
    pedidos?: PedidoListRelationFilter
  }, "id">

  export type EstabelecimentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    _count?: EstabelecimentoCountOrderByAggregateInput
    _avg?: EstabelecimentoAvgOrderByAggregateInput
    _max?: EstabelecimentoMaxOrderByAggregateInput
    _min?: EstabelecimentoMinOrderByAggregateInput
    _sum?: EstabelecimentoSumOrderByAggregateInput
  }

  export type EstabelecimentoScalarWhereWithAggregatesInput = {
    AND?: EstabelecimentoScalarWhereWithAggregatesInput | EstabelecimentoScalarWhereWithAggregatesInput[]
    OR?: EstabelecimentoScalarWhereWithAggregatesInput[]
    NOT?: EstabelecimentoScalarWhereWithAggregatesInput | EstabelecimentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estabelecimento"> | number
    nome?: StringWithAggregatesFilter<"Estabelecimento"> | string
    endereco?: StringNullableWithAggregatesFilter<"Estabelecimento"> | string | null
    ativo?: BoolWithAggregatesFilter<"Estabelecimento"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Estabelecimento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Estabelecimento"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Estabelecimento"> | number
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: FloatFilter<"Produto"> | number
    createdAt?: DateTimeFilter<"Produto"> | Date | string
    updatedAt?: DateTimeFilter<"Produto"> | Date | string
    estabelecimentoId?: IntFilter<"Produto"> | number
    estabelecimento?: XOR<EstabelecimentoScalarRelationFilter, EstabelecimentoWhereInput>
    itensDePedido?: PedidoItemListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estabelecimentoId?: SortOrder
    estabelecimento?: EstabelecimentoOrderByWithRelationInput
    itensDePedido?: PedidoItemOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: FloatFilter<"Produto"> | number
    createdAt?: DateTimeFilter<"Produto"> | Date | string
    updatedAt?: DateTimeFilter<"Produto"> | Date | string
    estabelecimentoId?: IntFilter<"Produto"> | number
    estabelecimento?: XOR<EstabelecimentoScalarRelationFilter, EstabelecimentoWhereInput>
    itensDePedido?: PedidoItemListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estabelecimentoId?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    nome?: StringWithAggregatesFilter<"Produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    preco?: FloatWithAggregatesFilter<"Produto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
    estabelecimentoId?: IntWithAggregatesFilter<"Produto"> | number
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    total?: FloatFilter<"Pedido"> | number
    mesa?: StringFilter<"Pedido"> | string
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    estabelecimentoId?: IntFilter<"Pedido"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    estabelecimento?: XOR<EstabelecimentoScalarRelationFilter, EstabelecimentoWhereInput>
    itens?: PedidoItemListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrder
    mesa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    estabelecimentoId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    estabelecimento?: EstabelecimentoOrderByWithRelationInput
    itens?: PedidoItemOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    total?: FloatFilter<"Pedido"> | number
    mesa?: StringFilter<"Pedido"> | string
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    estabelecimentoId?: IntFilter<"Pedido"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    estabelecimento?: XOR<EstabelecimentoScalarRelationFilter, EstabelecimentoWhereInput>
    itens?: PedidoItemListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    mesa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    estabelecimentoId?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    total?: FloatWithAggregatesFilter<"Pedido"> | number
    mesa?: StringWithAggregatesFilter<"Pedido"> | string
    status?: EnumStatusPedidoWithAggregatesFilter<"Pedido"> | $Enums.StatusPedido
    createdAt?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Pedido"> | number
    estabelecimentoId?: IntWithAggregatesFilter<"Pedido"> | number
  }

  export type PedidoItemWhereInput = {
    AND?: PedidoItemWhereInput | PedidoItemWhereInput[]
    OR?: PedidoItemWhereInput[]
    NOT?: PedidoItemWhereInput | PedidoItemWhereInput[]
    id?: IntFilter<"PedidoItem"> | number
    quantidade?: IntFilter<"PedidoItem"> | number
    precoUnitario?: FloatFilter<"PedidoItem"> | number
    pedidoId?: IntFilter<"PedidoItem"> | number
    produtoId?: IntFilter<"PedidoItem"> | number
    createdAt?: DateTimeFilter<"PedidoItem"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }

  export type PedidoItemOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    createdAt?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
  }

  export type PedidoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoItemWhereInput | PedidoItemWhereInput[]
    OR?: PedidoItemWhereInput[]
    NOT?: PedidoItemWhereInput | PedidoItemWhereInput[]
    quantidade?: IntFilter<"PedidoItem"> | number
    precoUnitario?: FloatFilter<"PedidoItem"> | number
    pedidoId?: IntFilter<"PedidoItem"> | number
    produtoId?: IntFilter<"PedidoItem"> | number
    createdAt?: DateTimeFilter<"PedidoItem"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
  }, "id">

  export type PedidoItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    createdAt?: SortOrder
    _count?: PedidoItemCountOrderByAggregateInput
    _avg?: PedidoItemAvgOrderByAggregateInput
    _max?: PedidoItemMaxOrderByAggregateInput
    _min?: PedidoItemMinOrderByAggregateInput
    _sum?: PedidoItemSumOrderByAggregateInput
  }

  export type PedidoItemScalarWhereWithAggregatesInput = {
    AND?: PedidoItemScalarWhereWithAggregatesInput | PedidoItemScalarWhereWithAggregatesInput[]
    OR?: PedidoItemScalarWhereWithAggregatesInput[]
    NOT?: PedidoItemScalarWhereWithAggregatesInput | PedidoItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PedidoItem"> | number
    quantidade?: IntWithAggregatesFilter<"PedidoItem"> | number
    precoUnitario?: FloatWithAggregatesFilter<"PedidoItem"> | number
    pedidoId?: IntWithAggregatesFilter<"PedidoItem"> | number
    produtoId?: IntWithAggregatesFilter<"PedidoItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PedidoItem"> | Date | string
  }

  export type UsuarioCreateInput = {
    email: string
    nome: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimentos?: EstabelecimentoCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    nome: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimentos?: EstabelecimentoUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimentos?: EstabelecimentoUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimentos?: EstabelecimentoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    nome: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstabelecimentoCreateInput = {
    nome: string
    endereco?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutEstabelecimentosInput
    produtos?: ProdutoCreateNestedManyWithoutEstabelecimentoInput
    pedidos?: PedidoCreateNestedManyWithoutEstabelecimentoInput
  }

  export type EstabelecimentoUncheckedCreateInput = {
    id?: number
    nome: string
    endereco?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    produtos?: ProdutoUncheckedCreateNestedManyWithoutEstabelecimentoInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutEstabelecimentoInput
  }

  export type EstabelecimentoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutEstabelecimentosNestedInput
    produtos?: ProdutoUpdateManyWithoutEstabelecimentoNestedInput
    pedidos?: PedidoUpdateManyWithoutEstabelecimentoNestedInput
  }

  export type EstabelecimentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    produtos?: ProdutoUncheckedUpdateManyWithoutEstabelecimentoNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutEstabelecimentoNestedInput
  }

  export type EstabelecimentoCreateManyInput = {
    id?: number
    nome: string
    endereco?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
  }

  export type EstabelecimentoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstabelecimentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoCreateInput = {
    nome: string
    descricao?: string | null
    preco: number
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimento: EstabelecimentoCreateNestedOneWithoutProdutosInput
    itensDePedido?: PedidoItemCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimentoId: number
    itensDePedido?: PedidoItemUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimento?: EstabelecimentoUpdateOneRequiredWithoutProdutosNestedInput
    itensDePedido?: PedidoItemUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimentoId?: IntFieldUpdateOperationsInput | number
    itensDePedido?: PedidoItemUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimentoId: number
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimentoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateInput = {
    total: number
    mesa: string
    status?: $Enums.StatusPedido
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    estabelecimento: EstabelecimentoCreateNestedOneWithoutPedidosInput
    itens?: PedidoItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    total: number
    mesa: string
    status?: $Enums.StatusPedido
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    estabelecimentoId: number
    itens?: PedidoItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    estabelecimento?: EstabelecimentoUpdateOneRequiredWithoutPedidosNestedInput
    itens?: PedidoItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    estabelecimentoId?: IntFieldUpdateOperationsInput | number
    itens?: PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    total: number
    mesa: string
    status?: $Enums.StatusPedido
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    estabelecimentoId: number
  }

  export type PedidoUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    estabelecimentoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoItemCreateInput = {
    quantidade: number
    precoUnitario: number
    createdAt?: Date | string
    pedido: PedidoCreateNestedOneWithoutItensInput
    produto: ProdutoCreateNestedOneWithoutItensDePedidoInput
  }

  export type PedidoItemUncheckedCreateInput = {
    id?: number
    quantidade: number
    precoUnitario: number
    pedidoId: number
    produtoId: number
    createdAt?: Date | string
  }

  export type PedidoItemUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutItensDePedidoNestedInput
  }

  export type PedidoItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoItemCreateManyInput = {
    id?: number
    quantidade: number
    precoUnitario: number
    pedidoId: number
    produtoId: number
    createdAt?: Date | string
  }

  export type PedidoItemUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type EstabelecimentoListRelationFilter = {
    every?: EstabelecimentoWhereInput
    some?: EstabelecimentoWhereInput
    none?: EstabelecimentoWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type EstabelecimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstabelecimentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type EstabelecimentoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type EstabelecimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type EstabelecimentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type EstabelecimentoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EstabelecimentoScalarRelationFilter = {
    is?: EstabelecimentoWhereInput
    isNot?: EstabelecimentoWhereInput
  }

  export type PedidoItemListRelationFilter = {
    every?: PedidoItemWhereInput
    some?: PedidoItemWhereInput
    none?: PedidoItemWhereInput
  }

  export type PedidoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    mesa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    usuarioId?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    mesa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    mesa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    usuarioId?: SortOrder
    estabelecimentoId?: SortOrder
  }

  export type EnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type PedidoItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    createdAt?: SortOrder
  }

  export type PedidoItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type PedidoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    createdAt?: SortOrder
  }

  export type PedidoItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    createdAt?: SortOrder
  }

  export type PedidoItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type EstabelecimentoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EstabelecimentoCreateWithoutUsuarioInput, EstabelecimentoUncheckedCreateWithoutUsuarioInput> | EstabelecimentoCreateWithoutUsuarioInput[] | EstabelecimentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstabelecimentoCreateOrConnectWithoutUsuarioInput | EstabelecimentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EstabelecimentoCreateManyUsuarioInputEnvelope
    connect?: EstabelecimentoWhereUniqueInput | EstabelecimentoWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type EstabelecimentoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EstabelecimentoCreateWithoutUsuarioInput, EstabelecimentoUncheckedCreateWithoutUsuarioInput> | EstabelecimentoCreateWithoutUsuarioInput[] | EstabelecimentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstabelecimentoCreateOrConnectWithoutUsuarioInput | EstabelecimentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: EstabelecimentoCreateManyUsuarioInputEnvelope
    connect?: EstabelecimentoWhereUniqueInput | EstabelecimentoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EstabelecimentoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EstabelecimentoCreateWithoutUsuarioInput, EstabelecimentoUncheckedCreateWithoutUsuarioInput> | EstabelecimentoCreateWithoutUsuarioInput[] | EstabelecimentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstabelecimentoCreateOrConnectWithoutUsuarioInput | EstabelecimentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EstabelecimentoUpsertWithWhereUniqueWithoutUsuarioInput | EstabelecimentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EstabelecimentoCreateManyUsuarioInputEnvelope
    set?: EstabelecimentoWhereUniqueInput | EstabelecimentoWhereUniqueInput[]
    disconnect?: EstabelecimentoWhereUniqueInput | EstabelecimentoWhereUniqueInput[]
    delete?: EstabelecimentoWhereUniqueInput | EstabelecimentoWhereUniqueInput[]
    connect?: EstabelecimentoWhereUniqueInput | EstabelecimentoWhereUniqueInput[]
    update?: EstabelecimentoUpdateWithWhereUniqueWithoutUsuarioInput | EstabelecimentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EstabelecimentoUpdateManyWithWhereWithoutUsuarioInput | EstabelecimentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EstabelecimentoScalarWhereInput | EstabelecimentoScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstabelecimentoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EstabelecimentoCreateWithoutUsuarioInput, EstabelecimentoUncheckedCreateWithoutUsuarioInput> | EstabelecimentoCreateWithoutUsuarioInput[] | EstabelecimentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstabelecimentoCreateOrConnectWithoutUsuarioInput | EstabelecimentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: EstabelecimentoUpsertWithWhereUniqueWithoutUsuarioInput | EstabelecimentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EstabelecimentoCreateManyUsuarioInputEnvelope
    set?: EstabelecimentoWhereUniqueInput | EstabelecimentoWhereUniqueInput[]
    disconnect?: EstabelecimentoWhereUniqueInput | EstabelecimentoWhereUniqueInput[]
    delete?: EstabelecimentoWhereUniqueInput | EstabelecimentoWhereUniqueInput[]
    connect?: EstabelecimentoWhereUniqueInput | EstabelecimentoWhereUniqueInput[]
    update?: EstabelecimentoUpdateWithWhereUniqueWithoutUsuarioInput | EstabelecimentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EstabelecimentoUpdateManyWithWhereWithoutUsuarioInput | EstabelecimentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EstabelecimentoScalarWhereInput | EstabelecimentoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutEstabelecimentosInput = {
    create?: XOR<UsuarioCreateWithoutEstabelecimentosInput, UsuarioUncheckedCreateWithoutEstabelecimentosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEstabelecimentosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProdutoCreateNestedManyWithoutEstabelecimentoInput = {
    create?: XOR<ProdutoCreateWithoutEstabelecimentoInput, ProdutoUncheckedCreateWithoutEstabelecimentoInput> | ProdutoCreateWithoutEstabelecimentoInput[] | ProdutoUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutEstabelecimentoInput | ProdutoCreateOrConnectWithoutEstabelecimentoInput[]
    createMany?: ProdutoCreateManyEstabelecimentoInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutEstabelecimentoInput = {
    create?: XOR<PedidoCreateWithoutEstabelecimentoInput, PedidoUncheckedCreateWithoutEstabelecimentoInput> | PedidoCreateWithoutEstabelecimentoInput[] | PedidoUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEstabelecimentoInput | PedidoCreateOrConnectWithoutEstabelecimentoInput[]
    createMany?: PedidoCreateManyEstabelecimentoInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutEstabelecimentoInput = {
    create?: XOR<ProdutoCreateWithoutEstabelecimentoInput, ProdutoUncheckedCreateWithoutEstabelecimentoInput> | ProdutoCreateWithoutEstabelecimentoInput[] | ProdutoUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutEstabelecimentoInput | ProdutoCreateOrConnectWithoutEstabelecimentoInput[]
    createMany?: ProdutoCreateManyEstabelecimentoInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutEstabelecimentoInput = {
    create?: XOR<PedidoCreateWithoutEstabelecimentoInput, PedidoUncheckedCreateWithoutEstabelecimentoInput> | PedidoCreateWithoutEstabelecimentoInput[] | PedidoUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEstabelecimentoInput | PedidoCreateOrConnectWithoutEstabelecimentoInput[]
    createMany?: PedidoCreateManyEstabelecimentoInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutEstabelecimentosNestedInput = {
    create?: XOR<UsuarioCreateWithoutEstabelecimentosInput, UsuarioUncheckedCreateWithoutEstabelecimentosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEstabelecimentosInput
    upsert?: UsuarioUpsertWithoutEstabelecimentosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEstabelecimentosInput, UsuarioUpdateWithoutEstabelecimentosInput>, UsuarioUncheckedUpdateWithoutEstabelecimentosInput>
  }

  export type ProdutoUpdateManyWithoutEstabelecimentoNestedInput = {
    create?: XOR<ProdutoCreateWithoutEstabelecimentoInput, ProdutoUncheckedCreateWithoutEstabelecimentoInput> | ProdutoCreateWithoutEstabelecimentoInput[] | ProdutoUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutEstabelecimentoInput | ProdutoCreateOrConnectWithoutEstabelecimentoInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutEstabelecimentoInput | ProdutoUpsertWithWhereUniqueWithoutEstabelecimentoInput[]
    createMany?: ProdutoCreateManyEstabelecimentoInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutEstabelecimentoInput | ProdutoUpdateWithWhereUniqueWithoutEstabelecimentoInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutEstabelecimentoInput | ProdutoUpdateManyWithWhereWithoutEstabelecimentoInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutEstabelecimentoNestedInput = {
    create?: XOR<PedidoCreateWithoutEstabelecimentoInput, PedidoUncheckedCreateWithoutEstabelecimentoInput> | PedidoCreateWithoutEstabelecimentoInput[] | PedidoUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEstabelecimentoInput | PedidoCreateOrConnectWithoutEstabelecimentoInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutEstabelecimentoInput | PedidoUpsertWithWhereUniqueWithoutEstabelecimentoInput[]
    createMany?: PedidoCreateManyEstabelecimentoInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutEstabelecimentoInput | PedidoUpdateWithWhereUniqueWithoutEstabelecimentoInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutEstabelecimentoInput | PedidoUpdateManyWithWhereWithoutEstabelecimentoInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutEstabelecimentoNestedInput = {
    create?: XOR<ProdutoCreateWithoutEstabelecimentoInput, ProdutoUncheckedCreateWithoutEstabelecimentoInput> | ProdutoCreateWithoutEstabelecimentoInput[] | ProdutoUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutEstabelecimentoInput | ProdutoCreateOrConnectWithoutEstabelecimentoInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutEstabelecimentoInput | ProdutoUpsertWithWhereUniqueWithoutEstabelecimentoInput[]
    createMany?: ProdutoCreateManyEstabelecimentoInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutEstabelecimentoInput | ProdutoUpdateWithWhereUniqueWithoutEstabelecimentoInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutEstabelecimentoInput | ProdutoUpdateManyWithWhereWithoutEstabelecimentoInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutEstabelecimentoNestedInput = {
    create?: XOR<PedidoCreateWithoutEstabelecimentoInput, PedidoUncheckedCreateWithoutEstabelecimentoInput> | PedidoCreateWithoutEstabelecimentoInput[] | PedidoUncheckedCreateWithoutEstabelecimentoInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutEstabelecimentoInput | PedidoCreateOrConnectWithoutEstabelecimentoInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutEstabelecimentoInput | PedidoUpsertWithWhereUniqueWithoutEstabelecimentoInput[]
    createMany?: PedidoCreateManyEstabelecimentoInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutEstabelecimentoInput | PedidoUpdateWithWhereUniqueWithoutEstabelecimentoInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutEstabelecimentoInput | PedidoUpdateManyWithWhereWithoutEstabelecimentoInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type EstabelecimentoCreateNestedOneWithoutProdutosInput = {
    create?: XOR<EstabelecimentoCreateWithoutProdutosInput, EstabelecimentoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: EstabelecimentoCreateOrConnectWithoutProdutosInput
    connect?: EstabelecimentoWhereUniqueInput
  }

  export type PedidoItemCreateNestedManyWithoutProdutoInput = {
    create?: XOR<PedidoItemCreateWithoutProdutoInput, PedidoItemUncheckedCreateWithoutProdutoInput> | PedidoItemCreateWithoutProdutoInput[] | PedidoItemUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutProdutoInput | PedidoItemCreateOrConnectWithoutProdutoInput[]
    createMany?: PedidoItemCreateManyProdutoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type PedidoItemUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<PedidoItemCreateWithoutProdutoInput, PedidoItemUncheckedCreateWithoutProdutoInput> | PedidoItemCreateWithoutProdutoInput[] | PedidoItemUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutProdutoInput | PedidoItemCreateOrConnectWithoutProdutoInput[]
    createMany?: PedidoItemCreateManyProdutoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstabelecimentoUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<EstabelecimentoCreateWithoutProdutosInput, EstabelecimentoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: EstabelecimentoCreateOrConnectWithoutProdutosInput
    upsert?: EstabelecimentoUpsertWithoutProdutosInput
    connect?: EstabelecimentoWhereUniqueInput
    update?: XOR<XOR<EstabelecimentoUpdateToOneWithWhereWithoutProdutosInput, EstabelecimentoUpdateWithoutProdutosInput>, EstabelecimentoUncheckedUpdateWithoutProdutosInput>
  }

  export type PedidoItemUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutProdutoInput, PedidoItemUncheckedCreateWithoutProdutoInput> | PedidoItemCreateWithoutProdutoInput[] | PedidoItemUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutProdutoInput | PedidoItemCreateOrConnectWithoutProdutoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutProdutoInput | PedidoItemUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: PedidoItemCreateManyProdutoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutProdutoInput | PedidoItemUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutProdutoInput | PedidoItemUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type PedidoItemUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutProdutoInput, PedidoItemUncheckedCreateWithoutProdutoInput> | PedidoItemCreateWithoutProdutoInput[] | PedidoItemUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutProdutoInput | PedidoItemCreateOrConnectWithoutProdutoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutProdutoInput | PedidoItemUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: PedidoItemCreateManyProdutoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutProdutoInput | PedidoItemUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutProdutoInput | PedidoItemUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EstabelecimentoCreateNestedOneWithoutPedidosInput = {
    create?: XOR<EstabelecimentoCreateWithoutPedidosInput, EstabelecimentoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: EstabelecimentoCreateOrConnectWithoutPedidosInput
    connect?: EstabelecimentoWhereUniqueInput
  }

  export type PedidoItemCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type PedidoItemUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
  }

  export type EnumStatusPedidoFieldUpdateOperationsInput = {
    set?: $Enums.StatusPedido
  }

  export type UsuarioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    upsert?: UsuarioUpsertWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPedidosInput, UsuarioUpdateWithoutPedidosInput>, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type EstabelecimentoUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<EstabelecimentoCreateWithoutPedidosInput, EstabelecimentoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: EstabelecimentoCreateOrConnectWithoutPedidosInput
    upsert?: EstabelecimentoUpsertWithoutPedidosInput
    connect?: EstabelecimentoWhereUniqueInput
    update?: XOR<XOR<EstabelecimentoUpdateToOneWithWhereWithoutPedidosInput, EstabelecimentoUpdateWithoutPedidosInput>, EstabelecimentoUncheckedUpdateWithoutPedidosInput>
  }

  export type PedidoItemUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutPedidoInput | PedidoItemUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutPedidoInput | PedidoItemUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutPedidoInput | PedidoItemUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput> | PedidoItemCreateWithoutPedidoInput[] | PedidoItemUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoItemCreateOrConnectWithoutPedidoInput | PedidoItemCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoItemUpsertWithWhereUniqueWithoutPedidoInput | PedidoItemUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoItemCreateManyPedidoInputEnvelope
    set?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    disconnect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    delete?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    connect?: PedidoItemWhereUniqueInput | PedidoItemWhereUniqueInput[]
    update?: PedidoItemUpdateWithWhereUniqueWithoutPedidoInput | PedidoItemUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoItemUpdateManyWithWhereWithoutPedidoInput | PedidoItemUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutItensInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutItensDePedidoInput = {
    create?: XOR<ProdutoCreateWithoutItensDePedidoInput, ProdutoUncheckedCreateWithoutItensDePedidoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensDePedidoInput
    connect?: ProdutoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    upsert?: PedidoUpsertWithoutItensInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItensInput, PedidoUpdateWithoutItensInput>, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateOneRequiredWithoutItensDePedidoNestedInput = {
    create?: XOR<ProdutoCreateWithoutItensDePedidoInput, ProdutoUncheckedCreateWithoutItensDePedidoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutItensDePedidoInput
    upsert?: ProdutoUpsertWithoutItensDePedidoInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutItensDePedidoInput, ProdutoUpdateWithoutItensDePedidoInput>, ProdutoUncheckedUpdateWithoutItensDePedidoInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatusPedidoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoFilter<$PrismaModel> | $Enums.StatusPedido
  }

  export type NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPedido | EnumStatusPedidoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPedido[] | ListEnumStatusPedidoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPedidoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPedido
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPedidoFilter<$PrismaModel>
    _max?: NestedEnumStatusPedidoFilter<$PrismaModel>
  }

  export type EstabelecimentoCreateWithoutUsuarioInput = {
    nome: string
    endereco?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produtos?: ProdutoCreateNestedManyWithoutEstabelecimentoInput
    pedidos?: PedidoCreateNestedManyWithoutEstabelecimentoInput
  }

  export type EstabelecimentoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    endereco?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produtos?: ProdutoUncheckedCreateNestedManyWithoutEstabelecimentoInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutEstabelecimentoInput
  }

  export type EstabelecimentoCreateOrConnectWithoutUsuarioInput = {
    where: EstabelecimentoWhereUniqueInput
    create: XOR<EstabelecimentoCreateWithoutUsuarioInput, EstabelecimentoUncheckedCreateWithoutUsuarioInput>
  }

  export type EstabelecimentoCreateManyUsuarioInputEnvelope = {
    data: EstabelecimentoCreateManyUsuarioInput | EstabelecimentoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutUsuarioInput = {
    total: number
    mesa: string
    status?: $Enums.StatusPedido
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimento: EstabelecimentoCreateNestedOneWithoutPedidosInput
    itens?: PedidoItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    total: number
    mesa: string
    status?: $Enums.StatusPedido
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimentoId: number
    itens?: PedidoItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoCreateManyUsuarioInputEnvelope = {
    data: PedidoCreateManyUsuarioInput | PedidoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EstabelecimentoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EstabelecimentoWhereUniqueInput
    update: XOR<EstabelecimentoUpdateWithoutUsuarioInput, EstabelecimentoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EstabelecimentoCreateWithoutUsuarioInput, EstabelecimentoUncheckedCreateWithoutUsuarioInput>
  }

  export type EstabelecimentoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EstabelecimentoWhereUniqueInput
    data: XOR<EstabelecimentoUpdateWithoutUsuarioInput, EstabelecimentoUncheckedUpdateWithoutUsuarioInput>
  }

  export type EstabelecimentoUpdateManyWithWhereWithoutUsuarioInput = {
    where: EstabelecimentoScalarWhereInput
    data: XOR<EstabelecimentoUpdateManyMutationInput, EstabelecimentoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EstabelecimentoScalarWhereInput = {
    AND?: EstabelecimentoScalarWhereInput | EstabelecimentoScalarWhereInput[]
    OR?: EstabelecimentoScalarWhereInput[]
    NOT?: EstabelecimentoScalarWhereInput | EstabelecimentoScalarWhereInput[]
    id?: IntFilter<"Estabelecimento"> | number
    nome?: StringFilter<"Estabelecimento"> | string
    endereco?: StringNullableFilter<"Estabelecimento"> | string | null
    ativo?: BoolFilter<"Estabelecimento"> | boolean
    createdAt?: DateTimeFilter<"Estabelecimento"> | Date | string
    updatedAt?: DateTimeFilter<"Estabelecimento"> | Date | string
    usuarioId?: IntFilter<"Estabelecimento"> | number
  }

  export type PedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    total?: FloatFilter<"Pedido"> | number
    mesa?: StringFilter<"Pedido"> | string
    status?: EnumStatusPedidoFilter<"Pedido"> | $Enums.StatusPedido
    createdAt?: DateTimeFilter<"Pedido"> | Date | string
    updatedAt?: DateTimeFilter<"Pedido"> | Date | string
    usuarioId?: IntFilter<"Pedido"> | number
    estabelecimentoId?: IntFilter<"Pedido"> | number
  }

  export type UsuarioCreateWithoutEstabelecimentosInput = {
    email: string
    nome: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutEstabelecimentosInput = {
    id?: number
    email: string
    nome: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEstabelecimentosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEstabelecimentosInput, UsuarioUncheckedCreateWithoutEstabelecimentosInput>
  }

  export type ProdutoCreateWithoutEstabelecimentoInput = {
    nome: string
    descricao?: string | null
    preco: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itensDePedido?: PedidoItemCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutEstabelecimentoInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itensDePedido?: PedidoItemUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutEstabelecimentoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutEstabelecimentoInput, ProdutoUncheckedCreateWithoutEstabelecimentoInput>
  }

  export type ProdutoCreateManyEstabelecimentoInputEnvelope = {
    data: ProdutoCreateManyEstabelecimentoInput | ProdutoCreateManyEstabelecimentoInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutEstabelecimentoInput = {
    total: number
    mesa: string
    status?: $Enums.StatusPedido
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    itens?: PedidoItemCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutEstabelecimentoInput = {
    id?: number
    total: number
    mesa: string
    status?: $Enums.StatusPedido
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    itens?: PedidoItemUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutEstabelecimentoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutEstabelecimentoInput, PedidoUncheckedCreateWithoutEstabelecimentoInput>
  }

  export type PedidoCreateManyEstabelecimentoInputEnvelope = {
    data: PedidoCreateManyEstabelecimentoInput | PedidoCreateManyEstabelecimentoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutEstabelecimentosInput = {
    update: XOR<UsuarioUpdateWithoutEstabelecimentosInput, UsuarioUncheckedUpdateWithoutEstabelecimentosInput>
    create: XOR<UsuarioCreateWithoutEstabelecimentosInput, UsuarioUncheckedCreateWithoutEstabelecimentosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEstabelecimentosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEstabelecimentosInput, UsuarioUncheckedUpdateWithoutEstabelecimentosInput>
  }

  export type UsuarioUpdateWithoutEstabelecimentosInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEstabelecimentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProdutoUpsertWithWhereUniqueWithoutEstabelecimentoInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutEstabelecimentoInput, ProdutoUncheckedUpdateWithoutEstabelecimentoInput>
    create: XOR<ProdutoCreateWithoutEstabelecimentoInput, ProdutoUncheckedCreateWithoutEstabelecimentoInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutEstabelecimentoInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutEstabelecimentoInput, ProdutoUncheckedUpdateWithoutEstabelecimentoInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutEstabelecimentoInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutEstabelecimentoInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    preco?: FloatFilter<"Produto"> | number
    createdAt?: DateTimeFilter<"Produto"> | Date | string
    updatedAt?: DateTimeFilter<"Produto"> | Date | string
    estabelecimentoId?: IntFilter<"Produto"> | number
  }

  export type PedidoUpsertWithWhereUniqueWithoutEstabelecimentoInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutEstabelecimentoInput, PedidoUncheckedUpdateWithoutEstabelecimentoInput>
    create: XOR<PedidoCreateWithoutEstabelecimentoInput, PedidoUncheckedCreateWithoutEstabelecimentoInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutEstabelecimentoInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutEstabelecimentoInput, PedidoUncheckedUpdateWithoutEstabelecimentoInput>
  }

  export type PedidoUpdateManyWithWhereWithoutEstabelecimentoInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutEstabelecimentoInput>
  }

  export type EstabelecimentoCreateWithoutProdutosInput = {
    nome: string
    endereco?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutEstabelecimentosInput
    pedidos?: PedidoCreateNestedManyWithoutEstabelecimentoInput
  }

  export type EstabelecimentoUncheckedCreateWithoutProdutosInput = {
    id?: number
    nome: string
    endereco?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    pedidos?: PedidoUncheckedCreateNestedManyWithoutEstabelecimentoInput
  }

  export type EstabelecimentoCreateOrConnectWithoutProdutosInput = {
    where: EstabelecimentoWhereUniqueInput
    create: XOR<EstabelecimentoCreateWithoutProdutosInput, EstabelecimentoUncheckedCreateWithoutProdutosInput>
  }

  export type PedidoItemCreateWithoutProdutoInput = {
    quantidade: number
    precoUnitario: number
    createdAt?: Date | string
    pedido: PedidoCreateNestedOneWithoutItensInput
  }

  export type PedidoItemUncheckedCreateWithoutProdutoInput = {
    id?: number
    quantidade: number
    precoUnitario: number
    pedidoId: number
    createdAt?: Date | string
  }

  export type PedidoItemCreateOrConnectWithoutProdutoInput = {
    where: PedidoItemWhereUniqueInput
    create: XOR<PedidoItemCreateWithoutProdutoInput, PedidoItemUncheckedCreateWithoutProdutoInput>
  }

  export type PedidoItemCreateManyProdutoInputEnvelope = {
    data: PedidoItemCreateManyProdutoInput | PedidoItemCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type EstabelecimentoUpsertWithoutProdutosInput = {
    update: XOR<EstabelecimentoUpdateWithoutProdutosInput, EstabelecimentoUncheckedUpdateWithoutProdutosInput>
    create: XOR<EstabelecimentoCreateWithoutProdutosInput, EstabelecimentoUncheckedCreateWithoutProdutosInput>
    where?: EstabelecimentoWhereInput
  }

  export type EstabelecimentoUpdateToOneWithWhereWithoutProdutosInput = {
    where?: EstabelecimentoWhereInput
    data: XOR<EstabelecimentoUpdateWithoutProdutosInput, EstabelecimentoUncheckedUpdateWithoutProdutosInput>
  }

  export type EstabelecimentoUpdateWithoutProdutosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutEstabelecimentosNestedInput
    pedidos?: PedidoUpdateManyWithoutEstabelecimentoNestedInput
  }

  export type EstabelecimentoUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    pedidos?: PedidoUncheckedUpdateManyWithoutEstabelecimentoNestedInput
  }

  export type PedidoItemUpsertWithWhereUniqueWithoutProdutoInput = {
    where: PedidoItemWhereUniqueInput
    update: XOR<PedidoItemUpdateWithoutProdutoInput, PedidoItemUncheckedUpdateWithoutProdutoInput>
    create: XOR<PedidoItemCreateWithoutProdutoInput, PedidoItemUncheckedCreateWithoutProdutoInput>
  }

  export type PedidoItemUpdateWithWhereUniqueWithoutProdutoInput = {
    where: PedidoItemWhereUniqueInput
    data: XOR<PedidoItemUpdateWithoutProdutoInput, PedidoItemUncheckedUpdateWithoutProdutoInput>
  }

  export type PedidoItemUpdateManyWithWhereWithoutProdutoInput = {
    where: PedidoItemScalarWhereInput
    data: XOR<PedidoItemUpdateManyMutationInput, PedidoItemUncheckedUpdateManyWithoutProdutoInput>
  }

  export type PedidoItemScalarWhereInput = {
    AND?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
    OR?: PedidoItemScalarWhereInput[]
    NOT?: PedidoItemScalarWhereInput | PedidoItemScalarWhereInput[]
    id?: IntFilter<"PedidoItem"> | number
    quantidade?: IntFilter<"PedidoItem"> | number
    precoUnitario?: FloatFilter<"PedidoItem"> | number
    pedidoId?: IntFilter<"PedidoItem"> | number
    produtoId?: IntFilter<"PedidoItem"> | number
    createdAt?: DateTimeFilter<"PedidoItem"> | Date | string
  }

  export type UsuarioCreateWithoutPedidosInput = {
    email: string
    nome: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimentos?: EstabelecimentoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPedidosInput = {
    id?: number
    email: string
    nome: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimentos?: EstabelecimentoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPedidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
  }

  export type EstabelecimentoCreateWithoutPedidosInput = {
    nome: string
    endereco?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutEstabelecimentosInput
    produtos?: ProdutoCreateNestedManyWithoutEstabelecimentoInput
  }

  export type EstabelecimentoUncheckedCreateWithoutPedidosInput = {
    id?: number
    nome: string
    endereco?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    produtos?: ProdutoUncheckedCreateNestedManyWithoutEstabelecimentoInput
  }

  export type EstabelecimentoCreateOrConnectWithoutPedidosInput = {
    where: EstabelecimentoWhereUniqueInput
    create: XOR<EstabelecimentoCreateWithoutPedidosInput, EstabelecimentoUncheckedCreateWithoutPedidosInput>
  }

  export type PedidoItemCreateWithoutPedidoInput = {
    quantidade: number
    precoUnitario: number
    createdAt?: Date | string
    produto: ProdutoCreateNestedOneWithoutItensDePedidoInput
  }

  export type PedidoItemUncheckedCreateWithoutPedidoInput = {
    id?: number
    quantidade: number
    precoUnitario: number
    produtoId: number
    createdAt?: Date | string
  }

  export type PedidoItemCreateOrConnectWithoutPedidoInput = {
    where: PedidoItemWhereUniqueInput
    create: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoItemCreateManyPedidoInputEnvelope = {
    data: PedidoItemCreateManyPedidoInput | PedidoItemCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPedidosInput = {
    update: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type UsuarioUpdateWithoutPedidosInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimentos?: EstabelecimentoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimentos?: EstabelecimentoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type EstabelecimentoUpsertWithoutPedidosInput = {
    update: XOR<EstabelecimentoUpdateWithoutPedidosInput, EstabelecimentoUncheckedUpdateWithoutPedidosInput>
    create: XOR<EstabelecimentoCreateWithoutPedidosInput, EstabelecimentoUncheckedCreateWithoutPedidosInput>
    where?: EstabelecimentoWhereInput
  }

  export type EstabelecimentoUpdateToOneWithWhereWithoutPedidosInput = {
    where?: EstabelecimentoWhereInput
    data: XOR<EstabelecimentoUpdateWithoutPedidosInput, EstabelecimentoUncheckedUpdateWithoutPedidosInput>
  }

  export type EstabelecimentoUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutEstabelecimentosNestedInput
    produtos?: ProdutoUpdateManyWithoutEstabelecimentoNestedInput
  }

  export type EstabelecimentoUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    produtos?: ProdutoUncheckedUpdateManyWithoutEstabelecimentoNestedInput
  }

  export type PedidoItemUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidoItemWhereUniqueInput
    update: XOR<PedidoItemUpdateWithoutPedidoInput, PedidoItemUncheckedUpdateWithoutPedidoInput>
    create: XOR<PedidoItemCreateWithoutPedidoInput, PedidoItemUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoItemUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidoItemWhereUniqueInput
    data: XOR<PedidoItemUpdateWithoutPedidoInput, PedidoItemUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoItemUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidoItemScalarWhereInput
    data: XOR<PedidoItemUpdateManyMutationInput, PedidoItemUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoCreateWithoutItensInput = {
    total: number
    mesa: string
    status?: $Enums.StatusPedido
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    estabelecimento: EstabelecimentoCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutItensInput = {
    id?: number
    total: number
    mesa: string
    status?: $Enums.StatusPedido
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    estabelecimentoId: number
  }

  export type PedidoCreateOrConnectWithoutItensInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
  }

  export type ProdutoCreateWithoutItensDePedidoInput = {
    nome: string
    descricao?: string | null
    preco: number
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimento: EstabelecimentoCreateNestedOneWithoutProdutosInput
  }

  export type ProdutoUncheckedCreateWithoutItensDePedidoInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimentoId: number
  }

  export type ProdutoCreateOrConnectWithoutItensDePedidoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutItensDePedidoInput, ProdutoUncheckedCreateWithoutItensDePedidoInput>
  }

  export type PedidoUpsertWithoutItensInput = {
    update: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItensInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type PedidoUpdateWithoutItensInput = {
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    estabelecimento?: EstabelecimentoUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    estabelecimentoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoUpsertWithoutItensDePedidoInput = {
    update: XOR<ProdutoUpdateWithoutItensDePedidoInput, ProdutoUncheckedUpdateWithoutItensDePedidoInput>
    create: XOR<ProdutoCreateWithoutItensDePedidoInput, ProdutoUncheckedCreateWithoutItensDePedidoInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutItensDePedidoInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutItensDePedidoInput, ProdutoUncheckedUpdateWithoutItensDePedidoInput>
  }

  export type ProdutoUpdateWithoutItensDePedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimento?: EstabelecimentoUpdateOneRequiredWithoutProdutosNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutItensDePedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimentoId?: IntFieldUpdateOperationsInput | number
  }

  export type EstabelecimentoCreateManyUsuarioInput = {
    id?: number
    nome: string
    endereco?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoCreateManyUsuarioInput = {
    id?: number
    total: number
    mesa: string
    status?: $Enums.StatusPedido
    createdAt?: Date | string
    updatedAt?: Date | string
    estabelecimentoId: number
  }

  export type EstabelecimentoUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUpdateManyWithoutEstabelecimentoNestedInput
    pedidos?: PedidoUpdateManyWithoutEstabelecimentoNestedInput
  }

  export type EstabelecimentoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUncheckedUpdateManyWithoutEstabelecimentoNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutEstabelecimentoNestedInput
  }

  export type EstabelecimentoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUpdateWithoutUsuarioInput = {
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimento?: EstabelecimentoUpdateOneRequiredWithoutPedidosNestedInput
    itens?: PedidoItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimentoId?: IntFieldUpdateOperationsInput | number
    itens?: PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    estabelecimentoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoCreateManyEstabelecimentoInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PedidoCreateManyEstabelecimentoInput = {
    id?: number
    total: number
    mesa: string
    status?: $Enums.StatusPedido
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
  }

  export type ProdutoUpdateWithoutEstabelecimentoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itensDePedido?: PedidoItemUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutEstabelecimentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itensDePedido?: PedidoItemUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutEstabelecimentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUpdateWithoutEstabelecimentoInput = {
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    itens?: PedidoItemUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutEstabelecimentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    itens?: PedidoItemUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutEstabelecimentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    mesa?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPedidoFieldUpdateOperationsInput | $Enums.StatusPedido
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoItemCreateManyProdutoInput = {
    id?: number
    quantidade: number
    precoUnitario: number
    pedidoId: number
    createdAt?: Date | string
  }

  export type PedidoItemUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
  }

  export type PedidoItemUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoItemUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoItemCreateManyPedidoInput = {
    id?: number
    quantidade: number
    precoUnitario: number
    produtoId: number
    createdAt?: Date | string
  }

  export type PedidoItemUpdateWithoutPedidoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutItensDePedidoNestedInput
  }

  export type PedidoItemUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoItemUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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