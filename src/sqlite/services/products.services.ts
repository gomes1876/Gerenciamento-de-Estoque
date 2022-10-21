import { PRODUCT_CREATE, PRODUCT_DELETE } from "../database/product";
import { DatabaseConnection } from "../SQLiteDatabase";
import { item } from "../../types/Item";
import { SQLError } from "expo-sqlite";

const db = DatabaseConnection.getConnection();

async function dropData() {
    return db.transaction(
        (tx: any) => {
            tx.executeSql(PRODUCT_DELETE);
        },
        (txError: SQLError) => {
            console.log("SQLite Error - ERRO AO DELEAR PRODUCT :");
            console.log(txError);
        }
    );
}

async function createData() {
    return db.transaction(
        (tx: any) => {
            tx.executeSql(PRODUCT_CREATE);
        },
        (txError: SQLError) => {
            console.log("SQLite Error - ERRO AO CRIAR PRODUCT:");
            console.log(txError);
        }
    );
}
async function insertData(item: item): Promise<item[]> {

    return new Promise(async (resolve, rejected) => {
        return db.transaction((tx: any) => {
            //comando SQL modificável
            tx.executeSql(
                `INSERT INTO PRODUCT (title, price, inventory, image) values (?, ?, ?, ?);`,
                [item.title, item.price, item.inventory, item.image],
                //-----------------------
                (_: any, { rowsAffected, insertId }: any) => {
                    if (rowsAffected > 0) {
                        // console.log(rowsAffected);
                        // console.log(item);

                        // console.log('Inserido');

                        resolve(insertId)
                    }
                    if (rowsAffected <= 0) {
                        console.log("Erro ao inserir"); // insert falhou
                        rejected(insertId)
                    }
                },
                (_: any, error: Error) => console.log(`error ao inserir token na tabela: ${error}`) // erro interno em tx.executeSql
            );
        });
    });
}
async function showData() {
    return new Promise(async (resolve, rejected) => {
        db.transaction((tx: any) => {
            tx.executeSql(
                "SELECT * FROM PRODUCT;",
                [],
                //-----------------------
                (_: any, { rows }: any) => {
                    let recept = rows?._array;

                    resolve(recept);
                },
                (_: any, error: Error) => {
                    console.log("error", error);
                    rejected(error);
                } // erro interno em tx.executeSql
            );

        });
    });
}

async function updateByName(item: item) {
    return new Promise(async (resolve, rejected) => {
        db.transaction((tx: any) => {
            tx.executeSql(
                `UPDATE PRODUCT SET inventory=?, price=?, title=?, image=? WHERE title == "${item.title}";`,
                [item.inventory, item.price, item.title, item.image],
                //-----------------------
                (_: any, { rows }: any) => {
                    let recept = rows?._array;
                    console.log('foi');

                    resolve(recept);
                },
                (_: any, error: Error) => {
                    console.log("error", error);
                    rejected(error);
                }
            );

        });
    });
}
async function delateByName(item: item) {
    return new Promise(async (resolve, rejected) => {
        db.transaction((tx: any) => {
            tx.executeSql(
                `DELETE FROM PRODUCT WHERE title LIKE "${item.title}";`,
                [],
                //-----------------------
                (_: any, { rows }: any) => {
                    let recept = rows;

                    resolve(recept);
                },
                (_: any, error: Error) => {
                    console.log("error", error);
                    rejected(error);
                }
            );

        });
    });
}

export { createData, dropData, insertData, showData, updateByName, delateByName };
