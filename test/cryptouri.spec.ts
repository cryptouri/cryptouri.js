import { suite, test } from "mocha-typescript";
import { expect } from "chai";
import CryptoURI from "../src/cryptouri";

@suite class CryptoURISpec {
  @test "parses CryptoURIs"() {
    const exampleURI = "crypto:public:key:ed25519:6adfsqvzky9t042tlmfujeq88g8wzuhnm2nzxfd0qgdx3ac82ydq3pkr2c";
    expect(CryptoURI.parse(exampleURI)).to.eql(exampleURI);
  }
}
