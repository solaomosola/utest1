var human = require("../index");
var chai = require("chai");
var assert = chai.assert, expect = chai.expect;

describe("Human",function(){
    describe("Human Head",function(){
        it("Should Have One",function(){
            assert.equal(human.head(),1);
        })
        it("Should have 2 eyes",()=>{
            assert.equal(human.eyes(),2);
        })
    })
    describe("turso",()=>{
        it("Should be 1",()=>{
            expect(human.turso()).to.be.equal(1);
        })
    })
}) 