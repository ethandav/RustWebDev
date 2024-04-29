(function() {var type_impls = {
"parking_lot":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mutex%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#150\">source</a><a href=\"#impl-Mutex%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#154\">source</a><h4 class=\"code-header\">pub const fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.new\" class=\"fn\">new</a>(val: T) -&gt; <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new mutex in an unlocked state ready for use.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#173\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.into_inner\" class=\"fn\">into_inner</a>(self) -&gt; T</h4></section></summary><div class=\"docblock\"><p>Consumes this mutex, returning the underlying data.</p>\n</div></details></div></details>",0,"parking_lot::fair_mutex::FairMutex","parking_lot::mutex::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mutex%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#178\">source</a><a href=\"#impl-Mutex%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.const_new\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#183\">source</a><h4 class=\"code-header\">pub const fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.const_new\" class=\"fn\">const_new</a>(raw_mutex: R, val: T) -&gt; <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new mutex based on a pre-existing raw mutex.</p>\n<p>This allows creating a mutex in a constant context on stable Rust.</p>\n</div></details></div></details>",0,"parking_lot::fair_mutex::FairMutex","parking_lot::mutex::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mutex%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#191\">source</a><a href=\"#impl-Mutex%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a>,\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.make_guard_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#201\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.make_guard_unchecked\" class=\"fn\">make_guard_unchecked</a>(&amp;self) -&gt; <a class=\"struct\" href=\"lock_api/mutex/struct.MutexGuard.html\" title=\"struct lock_api::mutex::MutexGuard\">MutexGuard</a>&lt;'_, R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>MutexGuard</code> without checking if the mutex is locked.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p>This method must only be called if the thread logically holds the lock.</p>\n<p>Calling this function when a guard has already been produced is undefined behaviour unless\nthe guard was forgotten with <code>mem::forget</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lock\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#218\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.lock\" class=\"fn\">lock</a>(&amp;self) -&gt; <a class=\"struct\" href=\"lock_api/mutex/struct.MutexGuard.html\" title=\"struct lock_api::mutex::MutexGuard\">MutexGuard</a>&lt;'_, R, T&gt;</h4></section></summary><div class=\"docblock\"><p>Acquires a mutex, blocking the current thread until it is able to do so.</p>\n<p>This function will block the local thread until it is available to acquire\nthe mutex. Upon returning, the thread is the only thread with the mutex\nheld. An RAII guard is returned to allow scoped unlock of the lock. When\nthe guard goes out of scope, the mutex will be unlocked.</p>\n<p>Attempts to lock a mutex in the thread which already holds the lock will\nresult in a deadlock.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_lock\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#232\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.try_lock\" class=\"fn\">try_lock</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"lock_api/mutex/struct.MutexGuard.html\" title=\"struct lock_api::mutex::MutexGuard\">MutexGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this lock.</p>\n<p>If the lock could not be acquired at this time, then <code>None</code> is returned.\nOtherwise, an RAII guard is returned. The lock will be unlocked when the\nguard is dropped.</p>\n<p>This function does not block.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#246\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.get_mut\" class=\"fn\">get_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the underlying data.</p>\n<p>Since this call borrows the <code>Mutex</code> mutably, no actual locking needs to\ntake place—the mutable borrow statically guarantees no locks exist.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_locked\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#252\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.is_locked\" class=\"fn\">is_locked</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Checks whether the mutex is currently locked.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.force_unlock\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#268\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.force_unlock\" class=\"fn\">force_unlock</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Forcibly unlocks the mutex.</p>\n<p>This is useful when combined with <code>mem::forget</code> to hold a lock without\nthe need to maintain a <code>MutexGuard</code> object alive, for example when\ndealing with FFI.</p>\n<h5 id=\"safety-1\"><a class=\"doc-anchor\" href=\"#safety-1\">§</a>Safety</h5>\n<p>This method must only be called if the current thread logically owns a\n<code>MutexGuard</code> but that guard has been discarded using <code>mem::forget</code>.\nBehavior is undefined if a mutex is unlocked when not locked.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.raw\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#282\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.raw\" class=\"fn\">raw</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;R</a></h4></section></summary><div class=\"docblock\"><p>Returns the underlying raw mutex object.</p>\n<p>Note that you will most likely need to import the <code>RawMutex</code> trait from\n<code>lock_api</code> to be able to call functions on the raw mutex.</p>\n<h5 id=\"safety-2\"><a class=\"doc-anchor\" href=\"#safety-2\">§</a>Safety</h5>\n<p>This method is unsafe because it allows unlocking a mutex while\nstill holding a reference to a <code>MutexGuard</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#298\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.data_ptr\" class=\"fn\">data_ptr</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.pointer.html\">*mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns a raw pointer to the underlying data.</p>\n<p>This is useful when combined with <code>mem::forget</code> to hold a lock without\nthe need to maintain a <code>MutexGuard</code> object alive, for example when\ndealing with FFI.</p>\n<h5 id=\"safety-3\"><a class=\"doc-anchor\" href=\"#safety-3\">§</a>Safety</h5>\n<p>You must ensure that there are no data races when dereferencing the\nreturned pointer, for example if the current thread logically owns\na <code>MutexGuard</code> but that guard has been discarded using <code>mem::forget</code>.</p>\n</div></details></div></details>",0,"parking_lot::fair_mutex::FairMutex","parking_lot::mutex::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mutex%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#347\">source</a><a href=\"#impl-Mutex%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutexFair.html\" title=\"trait lock_api::mutex::RawMutexFair\">RawMutexFair</a>,\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.force_unlock_fair\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#360\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.force_unlock_fair\" class=\"fn\">force_unlock_fair</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Forcibly unlocks the mutex using a fair unlock procotol.</p>\n<p>This is useful when combined with <code>mem::forget</code> to hold a lock without\nthe need to maintain a <code>MutexGuard</code> object alive, for example when\ndealing with FFI.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p>This method must only be called if the current thread logically owns a\n<code>MutexGuard</code> but that guard has been discarded using <code>mem::forget</code>.\nBehavior is undefined if a mutex is unlocked when not locked.</p>\n</div></details></div></details>",0,"parking_lot::fair_mutex::FairMutex","parking_lot::mutex::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mutex%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#365\">source</a><a href=\"#impl-Mutex%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutexTimed.html\" title=\"trait lock_api::mutex::RawMutexTimed\">RawMutexTimed</a>,\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_lock_for\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#372\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.try_lock_for\" class=\"fn\">try_lock_for</a>(\n    &amp;self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutexTimed.html\" title=\"trait lock_api::mutex::RawMutexTimed\">RawMutexTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/mutex/trait.RawMutexTimed.html#associatedtype.Duration\" title=\"type lock_api::mutex::RawMutexTimed::Duration\">Duration</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"lock_api/mutex/struct.MutexGuard.html\" title=\"struct lock_api::mutex::MutexGuard\">MutexGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this lock until a timeout is reached.</p>\n<p>If the lock could not be acquired before the timeout expired, then\n<code>None</code> is returned. Otherwise, an RAII guard is returned. The lock will\nbe unlocked when the guard is dropped.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_lock_until\" class=\"method\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#387\">source</a><h4 class=\"code-header\">pub fn <a href=\"lock_api/mutex/struct.Mutex.html#tymethod.try_lock_until\" class=\"fn\">try_lock_until</a>(\n    &amp;self,\n    timeout: &lt;R as <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutexTimed.html\" title=\"trait lock_api::mutex::RawMutexTimed\">RawMutexTimed</a>&gt;::<a class=\"associatedtype\" href=\"lock_api/mutex/trait.RawMutexTimed.html#associatedtype.Instant\" title=\"type lock_api::mutex::RawMutexTimed::Instant\">Instant</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"lock_api/mutex/struct.MutexGuard.html\" title=\"struct lock_api::mutex::MutexGuard\">MutexGuard</a>&lt;'_, R, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to acquire this lock until a timeout is reached.</p>\n<p>If the lock could not be acquired before the timeout expired, then\n<code>None</code> is returned. Otherwise, an RAII guard is returned. The lock will\nbe unlocked when the guard is dropped.</p>\n</div></details></div></details>",0,"parking_lot::fair_mutex::FairMutex","parking_lot::mutex::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Mutex%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#430\">source</a><a href=\"#impl-Default-for-Mutex%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#432\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","parking_lot::fair_mutex::FairMutex","parking_lot::mutex::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Mutex%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#444\">source</a><a href=\"#impl-Debug-for-Mutex%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#445\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","parking_lot::fair_mutex::FairMutex","parking_lot::mutex::Mutex"],["<section id=\"impl-Sync-for-Mutex%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#148\">source</a><a href=\"#impl-Sync-for-Mutex%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","Sync","parking_lot::fair_mutex::FairMutex","parking_lot::mutex::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CT%3E-for-Mutex%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#437\">source</a><a href=\"#impl-From%3CT%3E-for-Mutex%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#439\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(t: T) -&gt; <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<T>","parking_lot::fair_mutex::FairMutex","parking_lot::mutex::Mutex"],["<section id=\"impl-Send-for-Mutex%3CR,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lock_api/mutex.rs.html#147\">source</a><a href=\"#impl-Send-for-Mutex%3CR,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"lock_api/mutex/struct.Mutex.html\" title=\"struct lock_api::mutex::Mutex\">Mutex</a>&lt;R, T&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","Send","parking_lot::fair_mutex::FairMutex","parking_lot::mutex::Mutex"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()