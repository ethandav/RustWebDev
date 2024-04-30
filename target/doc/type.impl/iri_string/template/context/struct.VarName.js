(function() {var type_impls = {
"iri_string":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VarName%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#62-103\">source</a><a href=\"#impl-VarName%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"struct\" href=\"iri_string/template/context/struct.VarName.html\" title=\"struct iri_string::template::context::VarName\">VarName</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#90-95\">source</a><h4 class=\"code-header\">pub fn <a href=\"iri_string/template/context/struct.VarName.html#tymethod.new\" class=\"fn\">new</a>(s: &amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"iri_string/template/struct.Error.html\" title=\"struct iri_string::template::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a <code>VarName</code> from the string.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>iri_string::template::context::VarName;\n\n<span class=\"kw\">let </span>name = VarName::new(<span class=\"string\">\"hello\"</span>)<span class=\"question-mark\">?</span>;\n<span class=\"macro\">assert_eq!</span>(name.as_str(), <span class=\"string\">\"hello\"</span>);\n\n<span class=\"macro\">assert!</span>(VarName::new(<span class=\"string\">\"0+non-variable-name\"</span>).is_err());\n</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_str\" class=\"method\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#100-102\">source</a><h4 class=\"code-header\">pub fn <a href=\"iri_string/template/context/struct.VarName.html#tymethod.as_str\" class=\"fn\">as_str</a>(&amp;self) -&gt; &amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.str.html\">str</a></h4></section></summary><div class=\"docblock\"><p>Returns the varibale name.</p>\n</div></details></div></details>",0,"iri_string::template::VarName"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-VarName%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#59\">source</a><a href=\"#impl-Clone-for-VarName%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"iri_string/template/context/struct.VarName.html\" title=\"struct iri_string::template::context::VarName\">VarName</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#59\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iri_string/template/context/struct.VarName.html\" title=\"struct iri_string::template::context::VarName\">VarName</a>&lt;'a&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","iri_string::template::VarName"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-VarName%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#59\">source</a><a href=\"#impl-PartialEq-for-VarName%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"iri_string/template/context/struct.VarName.html\" title=\"struct iri_string::template::context::VarName\">VarName</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#59\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"iri_string/template/context/struct.VarName.html\" title=\"struct iri_string::template::context::VarName\">VarName</a>&lt;'a&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","iri_string::template::VarName"],["<section id=\"impl-Eq-for-VarName%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#59\">source</a><a href=\"#impl-Eq-for-VarName%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"iri_string/template/context/struct.VarName.html\" title=\"struct iri_string::template::context::VarName\">VarName</a>&lt;'a&gt;</h3></section>","Eq","iri_string::template::VarName"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-VarName%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#59\">source</a><a href=\"#impl-Hash-for-VarName%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"iri_string/template/context/struct.VarName.html\" title=\"struct iri_string::template::context::VarName\">VarName</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#59\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","iri_string::template::VarName"],["<section id=\"impl-Copy-for-VarName%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#59\">source</a><a href=\"#impl-Copy-for-VarName%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"iri_string/template/context/struct.VarName.html\" title=\"struct iri_string::template::context::VarName\">VarName</a>&lt;'a&gt;</h3></section>","Copy","iri_string::template::VarName"],["<section id=\"impl-StructuralPartialEq-for-VarName%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#59\">source</a><a href=\"#impl-StructuralPartialEq-for-VarName%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"iri_string/template/context/struct.VarName.html\" title=\"struct iri_string::template::context::VarName\">VarName</a>&lt;'a&gt;</h3></section>","StructuralPartialEq","iri_string::template::VarName"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-VarName%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#59\">source</a><a href=\"#impl-Debug-for-VarName%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"iri_string/template/context/struct.VarName.html\" title=\"struct iri_string::template::context::VarName\">VarName</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iri_string/template/components.rs.html#59\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iri_string::template::VarName"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()