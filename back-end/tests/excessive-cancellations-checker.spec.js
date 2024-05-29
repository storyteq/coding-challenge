/**
 * Note that this file cannot be modified.
 * If you would like to add your own unit tests, please put these in a separate test file.
*/
//Setup
import { ExcessiveCancellationsChecker } from '../excessive-cancellations-checker.js'

const checker = new ExcessiveCancellationsChecker('./data/trades.csv');

describe("Excessive Cancellations Test", () => {

    describe("calculate", () => {

        it("generates the list of companies that are involved in excessive cancelling", async () => {
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual(["Ape accountants", "Cauldron cooking"]);
        });

    });

});
