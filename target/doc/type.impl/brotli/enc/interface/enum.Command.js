(function() {var type_impls = {
"brotli":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Command%3CSliceType%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#475-492\">source</a><a href=\"#impl-Command%3CSliceType%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SliceType: <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"enum\" href=\"brotli/enc/interface/enum.Command.html\" title=\"enum brotli::enc::interface::Command\">Command</a>&lt;SliceType&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.free_array\" class=\"method\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#477-491\">source</a><h4 class=\"code-header\">pub fn <a href=\"brotli/enc/interface/enum.Command.html#tymethod.free_array\" class=\"fn\">free_array</a>&lt;F&gt;(&amp;mut self, apply_func: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;mut F</a>)<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(SliceType),</div></h4></section></div></details>",0,"brotli::enc::interface::StaticCommand"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Command%3CSliceType%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#721-742\">source</a><a href=\"#impl-Command%3CSliceType%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SliceType: <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"brotli/enc/interface/trait.Freezable.html\" title=\"trait brotli::enc::interface::Freezable\">Freezable</a>&gt; <a class=\"enum\" href=\"brotli/enc/interface/enum.Command.html\" title=\"enum brotli::enc::interface::Command\">Command</a>&lt;SliceType&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.freeze\" class=\"method\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#722-741\">source</a><h4 class=\"code-header\">pub fn <a href=\"brotli/enc/interface/enum.Command.html#tymethod.freeze\" class=\"fn\">freeze</a>(&amp;self) -&gt; <a class=\"enum\" href=\"brotli/enc/interface/enum.Command.html\" title=\"enum brotli::enc::interface::Command\">Command</a>&lt;<a class=\"struct\" href=\"brotli/enc/interface/struct.SliceOffset.html\" title=\"struct brotli::enc::interface::SliceOffset\">SliceOffset</a>&gt;</h4></section></div></details>",0,"brotli::enc::interface::StaticCommand"],["<section id=\"impl-Copy-for-Command%3CSliceType%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#523\">source</a><a href=\"#impl-Copy-for-Command%3CSliceType%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SliceType: <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"brotli/enc/interface/enum.Command.html\" title=\"enum brotli::enc::interface::Command\">Command</a>&lt;SliceType&gt;</h3></section>","Copy","brotli::enc::interface::StaticCommand"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Command%3CSliceType%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#494-499\">source</a><a href=\"#impl-Default-for-Command%3CSliceType%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SliceType: <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"brotli/enc/interface/enum.Command.html\" title=\"enum brotli::enc::interface::Command\">Command</a>&lt;SliceType&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#496-498\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","brotli::enc::interface::StaticCommand"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Command%3CSliceType%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#508-521\">source</a><a href=\"#impl-Clone-for-Command%3CSliceType%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SliceType: <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"brotli/enc/interface/enum.Command.html\" title=\"enum brotli::enc::interface::Command\">Command</a>&lt;SliceType&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#510-520\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"brotli/enc/interface/enum.Command.html\" title=\"enum brotli::enc::interface::Command\">Command</a>&lt;SliceType&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","brotli::enc::interface::StaticCommand"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Nop%3CCommand%3CSliceType%3E%3E-for-Command%3CSliceType%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#501-506\">source</a><a href=\"#impl-Nop%3CCommand%3CSliceType%3E%3E-for-Command%3CSliceType%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SliceType: <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt;&gt; <a class=\"trait\" href=\"brotli/enc/interface/trait.Nop.html\" title=\"trait brotli::enc::interface::Nop\">Nop</a>&lt;<a class=\"enum\" href=\"brotli/enc/interface/enum.Command.html\" title=\"enum brotli::enc::interface::Command\">Command</a>&lt;SliceType&gt;&gt; for <a class=\"enum\" href=\"brotli/enc/interface/enum.Command.html\" title=\"enum brotli::enc::interface::Command\">Command</a>&lt;SliceType&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.nop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#503-505\">source</a><a href=\"#method.nop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"brotli/enc/interface/trait.Nop.html#tymethod.nop\" class=\"fn\">nop</a>() -&gt; <a class=\"enum\" href=\"brotli/enc/interface/enum.Command.html\" title=\"enum brotli::enc::interface::Command\">Command</a>&lt;SliceType&gt;</h4></section></div></details>","Nop<Command<SliceType>>","brotli::enc::interface::StaticCommand"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Command%3CSliceType%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#465\">source</a><a href=\"#impl-Debug-for-Command%3CSliceType%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;SliceType: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"brotli/enc/interface/enum.Command.html\" title=\"enum brotli::enc::interface::Command\">Command</a>&lt;SliceType&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/brotli/enc/interface.rs.html#465\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","brotli::enc::interface::StaticCommand"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()