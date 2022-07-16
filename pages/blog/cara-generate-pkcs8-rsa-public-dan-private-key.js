import Head from "next/head";
import Footer from "@components/Footer";
import Header from "@components/Header";
import PostPattern from "@components/PostPattern";
export default function programmersJoke() {
    return (
        <div className="relative pb-16 bg-white overflow-hidden">
            <Header />
            <Head>
                <title>7 API Dummy bagus</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <PostPattern />
            <div className="relative pt-8 px-4 sm:px-6 lg:px-8">
                <div class="entry mx-auto max-w-lg">
                    
                        <h5>This article explains how to create RSA public and private key pairs in PKCS#8 format.</h5>
                        <p>&nbsp;</p>
                        <p>But first, lets make sure we have installed git. Why? because inside git theres openssl that we need to generate all this stuff.</p>
                        <p>if you have already installed git in your system, then look in <code>C:\Program Files\Git\usr\bin</code></p>
                        <p>This might be required if an upstream supplier asks you for the <strong>public</strong> in PKCS#8 format.</p>
                        <p>The key to achieving this is basically a three-step process:</p>
                        <p>1. Create key pair</p>
                        <pre><code>openssl genrsa -out keypair.pem 2048</code></pre>
                        <p>2. Extract public part</p>
                        <pre><code>openssl rsa -in keypair.pem -pubout -out publickey.crt</code></pre>
                        <p>At this point you have your public key called <code>publickey.crt</code></p>
                        <p>&nbsp;</p>
                        <p>3. Extract private part</p>
                        <pre><code>openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in keypair.pem -out pkcs8.key</code></pre>
                        <p>At this point, you have your <a href="https://kb.vander.host/security/how-to-covert-a-ppk-ssh-key-file-to-pem-ssh-key-file/" target="_blank" rel="noopener">private key</a> and it’s called <code>pkcs8.key</code></p>
                        <p>&nbsp;</p>
                        <h2>Reference</h2>
                        <p><a href="https://stackoverflow.com/questions/44474516/how-to-create-public-and-private-key-with-openssl" target="_blank" rel="noopener">https://stackoverflow.com/questions/44474516/how-to-create-public-and-private-key-with-openssl</a></p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    
                </div></div>
            <Footer />
        </div>
    )
}