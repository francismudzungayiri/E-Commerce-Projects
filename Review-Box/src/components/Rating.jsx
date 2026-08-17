function Rating() {
  return (
    <div class="mb-8">
      <div class="flex items-center gap-5">
        <div id="stars" class="flex gap-1"></div>

        <span id="ratingText" class="text-lg font-semibold text-slate-800">
          4.0 out of 5
        </span>
      </div>
    </div>
  );
}

export default Rating;
