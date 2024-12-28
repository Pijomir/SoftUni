import { rgbToHexColor } from "./rgb-to-hex.js";
import { expect } from "chai";


describe("Suit", function() {
    it("test1", function() {
        expect(rgbToHexColor("100", 150, 200)).to.equal(undefined);
    });

    it("test2", function() {
        expect(rgbToHexColor(500, 150, 200)).to.equal(undefined);
    });

    it("test3", function() {
        expect(rgbToHexColor(123, -150, 200)).to.equal(undefined);
    });
    
    it("test5", function() {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });

    it("test6", function() {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });

    it("test7", function() {
        expect(rgbToHexColor(138, 43, 226)).to.equal("#8A2BE2");
    });

    it("test8", function() {
        expect(rgbToHexColor(-0, 0, 255)).to.equal("#0000FF");
    });

    it("test9", function() {
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
    });
});