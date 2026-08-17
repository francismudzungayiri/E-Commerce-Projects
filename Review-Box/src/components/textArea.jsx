function TextArea() {
  return (
    <div class="relative">
      <textarea
        id="review"
        maxlength="500"
        rows="7"
        placeholder="Tell us what you think about this product..."
        class="w-full resize-none rounded-2xl border-2 border-slate-200 bg-white p-5 pb-12 text-base leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
      >
        Great product! The build quality is excellent and it works exactly as
        described. Delivery was fast and the customer support team was very
        helpful. I would definitely recommend this to others.
      </textarea>

      <div
        id="counter"
        class="absolute bottom-4 right-5 text-sm font-semibold text-slate-400"
      >
        0/500
      </div>
    </div>
  );
}

export default TextArea;
