import { Page } from "@playwright/test";
import { Console } from "console";

export class BasePage {
    // This is just demo page, assure it is some common page, we will use it when creating fixture
    readonly page: Page;
    
        constructor(page: Page) {
            this.page = page;

        }
    
        /*
        Demo common operation for this feature
        */
        async PrepareForFeature(item: string): Promise<void> {
            return; 
        }

        /*
        Demo common operation for feature
        */
        async Cleanup(item: string): Promise<void> {
            return; 
        }

        async Logmsg(msg: string): Promise<void> {
            console.log(msg);
            
        }
}