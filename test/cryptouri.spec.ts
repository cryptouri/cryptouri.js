import { suite, test } from "mocha-typescript";
import { expect } from "chai";
import CryptoURI from "../src/cryptouri";

@suite class CryptoURISpec {
  @test "parses CryptoURIs"() {
    const exampleURI = "crypto:pub:key:ed25519:6adfsqvzky9t042tlmfujeq88g8wzuhnm2nzxfd0qgdx3ac82ydqf03cvv";
    expect(CryptoURI.parse(exampleURI)).to.eql(exampleURI);
  }
}
