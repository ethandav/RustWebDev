(function() {var implementors = {
"base64":[["impl&lt;'e, E: <a class=\"trait\" href=\"base64/engine/trait.Engine.html\" title=\"trait base64::engine::Engine\">Engine</a>, S: <a class=\"trait\" href=\"base64/write/trait.StrConsumer.html\" title=\"trait base64::write::StrConsumer\">StrConsumer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"base64/write/struct.EncoderStringWriter.html\" title=\"struct base64::write::EncoderStringWriter\">EncoderStringWriter</a>&lt;'e, E, S&gt;"],["impl&lt;'e, E: <a class=\"trait\" href=\"base64/engine/trait.Engine.html\" title=\"trait base64::engine::Engine\">Engine</a>, W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"base64/write/struct.EncoderWriter.html\" title=\"struct base64::write::EncoderWriter\">EncoderWriter</a>&lt;'e, E, W&gt;"]],
"brotli":[["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"brotli/enc/writer/struct.CompressorWriter.html\" title=\"struct brotli::enc::writer::CompressorWriter\">CompressorWriter</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>, BufferType: <a class=\"trait\" href=\"brotli/writer/trait.SliceWrapperMut.html\" title=\"trait brotli::writer::SliceWrapperMut\">SliceWrapperMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt;, Alloc: <a class=\"trait\" href=\"brotli/enc/combined_alloc/trait.BrotliAlloc.html\" title=\"trait brotli::enc::combined_alloc::BrotliAlloc\">BrotliAlloc</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"brotli/enc/writer/struct.CompressorWriterCustomAlloc.html\" title=\"struct brotli::enc::writer::CompressorWriterCustomAlloc\">CompressorWriterCustomAlloc</a>&lt;W, BufferType, Alloc&gt;"]],
"brotli_decompressor":[["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>, BufferType: <a class=\"trait\" href=\"brotli_decompressor/trait.SliceWrapperMut.html\" title=\"trait brotli_decompressor::SliceWrapperMut\">SliceWrapperMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt;, AllocU8: <a class=\"trait\" href=\"brotli_decompressor/trait.Allocator.html\" title=\"trait brotli_decompressor::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt;, AllocU32: <a class=\"trait\" href=\"brotli_decompressor/trait.Allocator.html\" title=\"trait brotli_decompressor::Allocator\">Allocator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>&gt;, AllocHC: <a class=\"trait\" href=\"brotli_decompressor/trait.Allocator.html\" title=\"trait brotli_decompressor::Allocator\">Allocator</a>&lt;<a class=\"struct\" href=\"brotli_decompressor/reader/struct.HuffmanCode.html\" title=\"struct brotli_decompressor::reader::HuffmanCode\">HuffmanCode</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"brotli_decompressor/writer/struct.DecompressorWriterCustomAlloc.html\" title=\"struct brotli_decompressor::writer::DecompressorWriterCustomAlloc\">DecompressorWriterCustomAlloc</a>&lt;W, BufferType, AllocU8, AllocU32, AllocHC&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"brotli_decompressor/writer/struct.DecompressorWriter.html\" title=\"struct brotli_decompressor::writer::DecompressorWriter\">DecompressorWriter</a>&lt;W&gt;"]],
"bytes":[["impl&lt;B: <a class=\"trait\" href=\"bytes/buf/trait.BufMut.html\" title=\"trait bytes::buf::BufMut\">BufMut</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"bytes/buf/struct.Writer.html\" title=\"struct bytes::buf::Writer\">Writer</a>&lt;B&gt;"]],
"flate2":[["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/bufread/struct.DeflateDecoder.html\" title=\"struct flate2::bufread::DeflateDecoder\">DeflateDecoder</a>&lt;W&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/read/struct.GzEncoder.html\" title=\"struct flate2::read::GzEncoder\">GzEncoder</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/write/struct.DeflateDecoder.html\" title=\"struct flate2::write::DeflateDecoder\">DeflateDecoder</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/write/struct.ZlibDecoder.html\" title=\"struct flate2::write::ZlibDecoder\">ZlibDecoder</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/write/struct.GzDecoder.html\" title=\"struct flate2::write::GzDecoder\">GzDecoder</a>&lt;W&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/bufread/struct.GzDecoder.html\" title=\"struct flate2::bufread::GzDecoder\">GzDecoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/read/struct.ZlibDecoder.html\" title=\"struct flate2::read::ZlibDecoder\">ZlibDecoder</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/write/struct.GzEncoder.html\" title=\"struct flate2::write::GzEncoder\">GzEncoder</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/write/struct.ZlibEncoder.html\" title=\"struct flate2::write::ZlibEncoder\">ZlibEncoder</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/bufread/struct.DeflateEncoder.html\" title=\"struct flate2::bufread::DeflateEncoder\">DeflateEncoder</a>&lt;W&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/bufread/struct.ZlibEncoder.html\" title=\"struct flate2::bufread::ZlibEncoder\">ZlibEncoder</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/read/struct.DeflateEncoder.html\" title=\"struct flate2::read::DeflateEncoder\">DeflateEncoder</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/struct.CrcWriter.html\" title=\"struct flate2::CrcWriter\">CrcWriter</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/read/struct.DeflateDecoder.html\" title=\"struct flate2::read::DeflateDecoder\">DeflateDecoder</a>&lt;W&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/bufread/struct.ZlibDecoder.html\" title=\"struct flate2::bufread::ZlibDecoder\">ZlibDecoder</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/read/struct.GzDecoder.html\" title=\"struct flate2::read::GzDecoder\">GzDecoder</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/write/struct.MultiGzDecoder.html\" title=\"struct flate2::write::MultiGzDecoder\">MultiGzDecoder</a>&lt;W&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/bufread/struct.GzEncoder.html\" title=\"struct flate2::bufread::GzEncoder\">GzEncoder</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/write/struct.DeflateEncoder.html\" title=\"struct flate2::write::DeflateEncoder\">DeflateEncoder</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/read/struct.ZlibEncoder.html\" title=\"struct flate2::read::ZlibEncoder\">ZlibEncoder</a>&lt;W&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"flate2/read/struct.MultiGzDecoder.html\" title=\"struct flate2::read::MultiGzDecoder\">MultiGzDecoder</a>&lt;R&gt;"]],
"mio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"mio/unix/pipe/struct.Sender.html\" title=\"struct mio::unix::pipe::Sender\">Sender</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.UnixStream.html\" title=\"struct mio::net::UnixStream\">UnixStream</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"mio/net/struct.TcpStream.html\" title=\"struct mio::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;<a class=\"struct\" href=\"mio/unix/pipe/struct.Sender.html\" title=\"struct mio::unix::pipe::Sender\">Sender</a>"]],
"socket2":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>"]],
"zstd":[["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"type\" href=\"https://doc.rust-lang.org/1.77.1/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;W&gt;)&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"zstd/stream/write/struct.AutoFinishEncoder.html\" title=\"struct zstd::stream::write::AutoFinishEncoder\">AutoFinishEncoder</a>&lt;'_, W, F&gt;"],["impl&lt;'a, W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"zstd/stream/write/struct.Encoder.html\" title=\"struct zstd::stream::write::Encoder\">Encoder</a>&lt;'a, W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"type\" href=\"https://doc.rust-lang.org/1.77.1/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.unit.html\">()</a>&gt;)&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"zstd/stream/write/struct.AutoFlushDecoder.html\" title=\"struct zstd::stream::write::AutoFlushDecoder\">AutoFlushDecoder</a>&lt;'_, W, F&gt;"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"zstd/stream/write/struct.Decoder.html\" title=\"struct zstd::stream::write::Decoder\">Decoder</a>&lt;'_, W&gt;"],["impl&lt;W, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"zstd/stream/zio/struct.Writer.html\" title=\"struct zstd::stream::zio::Writer\">Writer</a>&lt;W, D&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,\n    D: <a class=\"trait\" href=\"zstd/stream/raw/trait.Operation.html\" title=\"trait zstd::stream::raw::Operation\">Operation</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()