// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { sizeAdvisor as sizeThunk } from "../store/aiSlice.js";

// export default function SizeAdvisor({ product, onPick }) {
//   const dispatch = useDispatch();
//   const result = useSelector(s => s.ai.size); // { recommendation, reason, ... }

//   const [form, setForm] = useState({
//     gender: (product?.category || "").toLowerCase().includes("women") ? "women" : "men",
//     category: product?.category || "topwear",
//     heightCm: "",
//     weightKg: "",
//     brand: product?.brand || "",
//     fit: "regular",
//   });

//   const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const getSize = async (e) => {
//     e.preventDefault();
//     const payload = {
//       gender: form.gender,
//       category: form.category,
//       heightCm: Number(form.heightCm),
//       weightKg: Number(form.weightKg),
//       brand: form.brand,
//       fit: form.fit,
//     };
//     await dispatch(sizeThunk(payload));
//   };

//   const apply = () => {
//     if (result?.recommendation && onPick) onPick(result.recommendation);
//   };

//   return (
//     <div className="panel" style={{marginTop:12}}>
//       <div className="row" style={{justifyContent:"space-between", alignItems:"center"}}>
//         <h3 style={{margin:0}}>Find your size</h3>
//       </div>

//       <form onSubmit={getSize} className="row gap" style={{flexWrap:"wrap", marginTop:8}}>
//         <select name="gender" value={form.gender} onChange={onChange}>
//           <option value="men">Men</option>
//           <option value="women">Women</option>
//         </select>

//         <input name="heightCm" placeholder="Height (cm)" value={form.heightCm} onChange={onChange} />
//         <input name="weightKg" placeholder="Weight (kg)" value={form.weightKg} onChange={onChange} />

//         <select name="fit" value={form.fit} onChange={onChange}>
//           <option value="slim">Slim</option>
//           <option value="regular">Regular</option>
//           <option value="loose">Loose</option>
//         </select>

//         <input name="brand" placeholder="Brand (optional)" value={form.brand} onChange={onChange} />

//         <button className="btn sm" type="submit">Get Size</button>
//       </form>

//       {result?.recommendation && (
//         <div className="panel" style={{marginTop:10, background:"#f8fafc"}}>
//           <div className="row" style={{justifyContent:"space-between", alignItems:"center"}}>
//             <div>
//               <div><b>Recommended:</b> {result.recommendation}</div>
//               <div className="muted" style={{marginTop:4}}>{result.reason}</div>
//             </div>
//             {onPick && (
//               <button className="btn outline sm" onClick={apply}>Apply size</button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// frontend/src/components/SizeAdvisor.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sizeAdvisor as sizeThunk } from "../store/aiSlice.js";

const INK = "#15171c";
const GOLD = "#AD8A4D";
const GREEN = "#1f7a4d";

const fieldClass =
  "w-full px-3 py-2.5 text-[13px] font-medium text-[#15171c] bg-white border border-[#15171c]/15 rounded-lg " +
  "outline-none transition-all duration-200 focus:border-[#AD8A4D] focus:ring-2 focus:ring-[#AD8A4D]/15 " +
  "placeholder:text-[#15171c]/35";

const labelClass = "block text-[11px] font-semibold text-[#15171c]/55 uppercase tracking-wide mb-1.5";

export default function SizeAdvisor({ product, onPick }) {
  const dispatch = useDispatch();
  const result = useSelector((s) => s.ai.size); // { recommendation, reason, ... }
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    gender: (product?.category || "").toLowerCase().includes("women") ? "women" : "men",
    category: product?.category || "topwear",
    heightCm: "",
    weightKg: "",
    brand: product?.brand || "",
    fit: "regular",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const getSize = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        gender: form.gender,
        category: form.category,
        heightCm: Number(form.heightCm),
        weightKg: Number(form.weightKg),
        brand: form.brand,
        fit: form.fit,
      };
      await dispatch(sizeThunk(payload));
    } finally {
      setLoading(false);
    }
  };

  const apply = () => {
    if (result?.recommendation && onPick) onPick(result.recommendation);
  };

  return (
    <div>
      <form onSubmit={getSize} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div>
          <label className={labelClass}>Gender</label>
          <select name="gender" value={form.gender} onChange={onChange} className={fieldClass}>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Height (cm)</label>
          <input
            name="heightCm"
            placeholder="e.g. 172"
            value={form.heightCm}
            onChange={onChange}
            inputMode="numeric"
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass}>Weight (kg)</label>
          <input
            name="weightKg"
            placeholder="e.g. 68"
            value={form.weightKg}
            onChange={onChange}
            inputMode="numeric"
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass}>Fit</label>
          <select name="fit" value={form.fit} onChange={onChange} className={fieldClass}>
            <option value="slim">Slim</option>
            <option value="regular">Regular</option>
            <option value="loose">Loose</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className={labelClass}>Brand (optional)</label>
          <input
            name="brand"
            placeholder="e.g. Levi's"
            value={form.brand}
            onChange={onChange}
            className={fieldClass}
          />
        </div>

        <div className="col-span-2 sm:col-span-3 flex justify-end mt-1">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-[#15171c] text-white text-[13px] font-semibold rounded-full px-5 py-2.5
              transition-all duration-200 hover:bg-[#2a2d36] active:scale-[0.97] disabled:opacity-50"
          >
            {loading && <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />}
            Get My Size
          </button>
        </div>
      </form>

      {result?.recommendation && (
        <div className="mt-4 rounded-lg border border-[#1f7a4d]/25 bg-[#1f7a4d]/[0.06] p-4 flex items-center justify-between gap-4 flex-wrap animate-[fadeIn_.2s_ease-out]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-[11px] font-semibold text-[#15171c]/55 uppercase tracking-wide">Recommended</span>
              <span className="text-[18px] font-bold text-[#15171c]">{result.recommendation}</span>
            </div>
            {result.reason && (
              <p className="text-[12.5px] text-[#15171c]/60 mt-1 max-w-md">{result.reason}</p>
            )}
          </div>
          {onPick && (
            <button
              onClick={apply}
              className="shrink-0 bg-white border border-[#1f7a4d]/40 text-[#1f7a4d] text-[12.5px] font-semibold rounded-full px-4 py-2
                hover:bg-[#1f7a4d] hover:text-white transition-all duration-200 active:scale-95"
            >
              Apply Size
            </button>
          )}
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}