(function() {var implementors = {
"alloc_no_stdlib":[],
"alloc_stdlib":[["impl&lt;T&gt; <a class=\"trait\" href=\"alloc_stdlib/trait.SliceWrapper.html\" title=\"trait alloc_stdlib::SliceWrapper\">SliceWrapper</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc_stdlib/heap_alloc/struct.WrapBox.html\" title=\"struct alloc_stdlib::heap_alloc::WrapBox\">WrapBox</a>&lt;T&gt;"],["impl&lt;'a, T: 'a&gt; <a class=\"trait\" href=\"alloc_stdlib/trait.SliceWrapper.html\" title=\"trait alloc_stdlib::SliceWrapper\">SliceWrapper</a>&lt;&amp;'a mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"alloc_stdlib/heap_alloc/struct.HeapPrealloc.html\" title=\"struct alloc_stdlib::heap_alloc::HeapPrealloc\">HeapPrealloc</a>&lt;'a, T&gt;"]],
"brotli":[["impl&lt;SliceType: <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"brotli/enc/interface/struct.LiteralCommand.html\" title=\"struct brotli::enc::interface::LiteralCommand\">LiteralCommand</a>&lt;SliceType&gt;"],["impl <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/histogram/struct.HistogramCommand.html\" title=\"struct brotli::enc::histogram::HistogramCommand\">HistogramCommand</a>"],["impl&lt;AllocU32: <a class=\"trait\" href=\"brotli/writer/trait.Allocator.html\" title=\"trait brotli::writer::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/backward_references/struct.H4Sub.html\" title=\"struct brotli::enc::backward_references::H4Sub\">H4Sub</a>&lt;AllocU32&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"brotli/enc/input_pair/struct.InputReference.html\" title=\"struct brotli::enc::input_pair::InputReference\">InputReference</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"brotli/enc/input_pair/struct.InputReferenceMut.html\" title=\"struct brotli::enc::input_pair::InputReferenceMut\">InputReferenceMut</a>&lt;'a&gt;"],["impl&lt;AllocU32: <a class=\"trait\" href=\"brotli/writer/trait.Allocator.html\" title=\"trait brotli::writer::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/backward_references/hash_to_binary_tree/struct.H10Buckets.html\" title=\"struct brotli::enc::backward_references::hash_to_binary_tree::H10Buckets\">H10Buckets</a>&lt;AllocU32&gt;"],["impl <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"brotli/enc/interface/struct.SliceOffset.html\" title=\"struct brotli::enc::interface::SliceOffset\">SliceOffset</a>"],["impl <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/histogram/struct.HistogramLiteral.html\" title=\"struct brotli::enc::histogram::HistogramLiteral\">HistogramLiteral</a>"],["impl&lt;AllocU32: <a class=\"trait\" href=\"brotli/writer/trait.Allocator.html\" title=\"trait brotli::writer::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/backward_references/struct.H54Sub.html\" title=\"struct brotli::enc::backward_references::H54Sub\">H54Sub</a>&lt;AllocU32&gt;"],["impl <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/histogram/struct.HistogramDistance.html\" title=\"struct brotli::enc::histogram::HistogramDistance\">HistogramDistance</a>"],["impl&lt;AllocU32: <a class=\"trait\" href=\"brotli/writer/trait.Allocator.html\" title=\"trait brotli::writer::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/backward_references/struct.H2Sub.html\" title=\"struct brotli::enc::backward_references::H2Sub\">H2Sub</a>&lt;AllocU32&gt;"],["impl&lt;SliceType: <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"brotli/enc/interface/struct.FeatureFlagSliceType.html\" title=\"struct brotli::enc::interface::FeatureFlagSliceType\">FeatureFlagSliceType</a>&lt;SliceType&gt;"],["impl&lt;AllocU32: <a class=\"trait\" href=\"brotli/writer/trait.Allocator.html\" title=\"trait brotli::writer::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapper.html\" title=\"trait brotli::writer::SliceWrapper\">SliceWrapper</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"brotli/enc/backward_references/struct.H3Sub.html\" title=\"struct brotli::enc::backward_references::H3Sub\">H3Sub</a>&lt;AllocU32&gt;"]],
"brotli_decompressor":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()