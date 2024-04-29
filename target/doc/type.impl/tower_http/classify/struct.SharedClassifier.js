(function() {var type_impls = {
"tower_http":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SharedClassifier%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/tower_http/classify/mod.rs.html#105-113\">source</a><a href=\"#impl-SharedClassifier%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C&gt; <a class=\"struct\" href=\"tower_http/classify/struct.SharedClassifier.html\" title=\"struct tower_http::classify::SharedClassifier\">SharedClassifier</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/tower_http/classify/mod.rs.html#107-112\">source</a><h4 class=\"code-header\">pub fn <a href=\"tower_http/classify/struct.SharedClassifier.html#tymethod.new\" class=\"fn\">new</a>(classifier: C) -&gt; Self<div class=\"where\">where\n    C: <a class=\"trait\" href=\"tower_http/classify/trait.ClassifyResponse.html\" title=\"trait tower_http::classify::ClassifyResponse\">ClassifyResponse</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h4></section></summary><div class=\"docblock\"><p>Create a new <code>SharedClassifier</code> from the given classifier.</p>\n</div></details></div></details>",0,"tower_http::trace::HttpMakeClassifier","tower_http::trace::GrpcMakeClassifier"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SharedClassifier%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/tower_http/classify/mod.rs.html#100\">source</a><a href=\"#impl-Debug-for-SharedClassifier%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"tower_http/classify/struct.SharedClassifier.html\" title=\"struct tower_http::classify::SharedClassifier\">SharedClassifier</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tower_http/classify/mod.rs.html#100\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","tower_http::trace::HttpMakeClassifier","tower_http::trace::GrpcMakeClassifier"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SharedClassifier%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/tower_http/classify/mod.rs.html#100\">source</a><a href=\"#impl-Clone-for-SharedClassifier%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower_http/classify/struct.SharedClassifier.html\" title=\"struct tower_http::classify::SharedClassifier\">SharedClassifier</a>&lt;C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tower_http/classify/mod.rs.html#100\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"tower_http/classify/struct.SharedClassifier.html\" title=\"struct tower_http::classify::SharedClassifier\">SharedClassifier</a>&lt;C&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","tower_http::trace::HttpMakeClassifier","tower_http::trace::GrpcMakeClassifier"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MakeClassifier-for-SharedClassifier%3CC%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/tower_http/classify/mod.rs.html#115-126\">source</a><a href=\"#impl-MakeClassifier-for-SharedClassifier%3CC%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C&gt; <a class=\"trait\" href=\"tower_http/classify/trait.MakeClassifier.html\" title=\"trait tower_http::classify::MakeClassifier\">MakeClassifier</a> for <a class=\"struct\" href=\"tower_http/classify/struct.SharedClassifier.html\" title=\"struct tower_http::classify::SharedClassifier\">SharedClassifier</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"tower_http/classify/trait.ClassifyResponse.html\" title=\"trait tower_http::classify::ClassifyResponse\">ClassifyResponse</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.FailureClass\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.FailureClass\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"tower_http/classify/trait.MakeClassifier.html#associatedtype.FailureClass\" class=\"associatedtype\">FailureClass</a> = &lt;C as <a class=\"trait\" href=\"tower_http/classify/trait.ClassifyResponse.html\" title=\"trait tower_http::classify::ClassifyResponse\">ClassifyResponse</a>&gt;::<a class=\"associatedtype\" href=\"tower_http/classify/trait.ClassifyResponse.html#associatedtype.FailureClass\" title=\"type tower_http::classify::ClassifyResponse::FailureClass\">FailureClass</a></h4></section></summary><div class='docblock'>The type of failure classifications. <a href=\"tower_http/classify/trait.MakeClassifier.html#associatedtype.FailureClass\">Read more</a></div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.ClassifyEos\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ClassifyEos\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"tower_http/classify/trait.MakeClassifier.html#associatedtype.ClassifyEos\" class=\"associatedtype\">ClassifyEos</a> = &lt;C as <a class=\"trait\" href=\"tower_http/classify/trait.ClassifyResponse.html\" title=\"trait tower_http::classify::ClassifyResponse\">ClassifyResponse</a>&gt;::<a class=\"associatedtype\" href=\"tower_http/classify/trait.ClassifyResponse.html#associatedtype.ClassifyEos\" title=\"type tower_http::classify::ClassifyResponse::ClassifyEos\">ClassifyEos</a></h4></section></summary><div class='docblock'>The type used to classify the response end of stream (EOS).</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Classifier\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Classifier\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"tower_http/classify/trait.MakeClassifier.html#associatedtype.Classifier\" class=\"associatedtype\">Classifier</a> = C</h4></section></summary><div class='docblock'>The response classifier produced.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.make_classifier\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tower_http/classify/mod.rs.html#123-125\">source</a><a href=\"#method.make_classifier\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tower_http/classify/trait.MakeClassifier.html#tymethod.make_classifier\" class=\"fn\">make_classifier</a>&lt;B&gt;(&amp;self, _req: &amp;<a class=\"struct\" href=\"http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;) -&gt; Self::<a class=\"associatedtype\" href=\"tower_http/classify/trait.MakeClassifier.html#associatedtype.Classifier\" title=\"type tower_http::classify::MakeClassifier::Classifier\">Classifier</a></h4></section></summary><div class='docblock'>Returns a response classifier for this request</div></details></div></details>","MakeClassifier","tower_http::trace::HttpMakeClassifier","tower_http::trace::GrpcMakeClassifier"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()