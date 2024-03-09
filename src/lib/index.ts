
import initSqlJs from 'sql.js';
// place files you want to import through the `$lib` alias in this folder.
export async function initialiseDatabase() {
    const SQL = await initSqlJs({
        locateFile: (file) => `/sql.js/${file}`
    });

    console.log('SQL', SQL);

    const db = new SQL.Database();
    console.log('db', db);

    const initPeriodTable = "CREATE TABLE periods (id INTEGER PRIMARY KEY, period TEXT); \
    INSERT INTO periods VALUES (0, 'day'); \
    INSERT INTO periods VALUES (1, 'week'); \
    INSERT INTO periods VALUES (2, 'month'); \
    INSERT INTO periods VALUES (3, 'year');";

    db.run(initPeriodTable);

    return db
}