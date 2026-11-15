/* 2026 教育科技展紀錄：單元切換、選單、相簿 */

// ---------- 資料 ----------
// 圖片來自雲端硬碟（以檔案 ID 載入縮圖）
const P = (id, name) => ({ id, name });

const PHOTOS = {
  edu: [
    P("1jIZuAfciShDTNhKS59viGlo5Jyk9-aNE", "IMG_0555"),
    P("18jl6B0nnB3pF8AOa8_reO6tPLs_xrjK7", "IMG_0556"),
    P("1KspIaD1KsXnl-EjWJMpkg4E5Xh_iQpXW", "IMG_0557"),
    P("11YuiIDFFnZTtA8nouIHgW1m5wUSK6T0K", "IMG_0558"),
    P("1QF0JEL26aBWHA3l00cmZ5G-ytmINu7AN", "IMG_0559"),
    P("15doGjWufmjw7CmhtHX7_xNAXmkcOMaQ1", "IMG_6964"),
    P("1ob0_ljHE3E7oHKBe8xHUFYkl15DWE1-s", "IMG_6965"),
    P("1JwwMV1H9vEvhRLOmcFWMvbhWs4cDDfA2", "IMG_6966"),
    P("1WJNECtJh3PBVV3PRF9PMYu-NkvLCIyrM", "IMG_6967"),
    P("11Xpg0ic8ykS1PhqIeOq4ny0YVBqK6J6A", "IMG_6968"),
    P("1XiALaeI6-tVznjitMvMp5R7YV6W74mTk", "IMG_6969"),
    P("1C-fNpyT1NECB2ANkEMfQDKvgYIm83XOJ", "IMG_6970"),
    P("1c4fDh-SvncaPGzXwfw0rq39u92kfUlFQ", "IMG_6971"),
    P("1IxIZcz1bNL0FbQmgo0Yh0BBR03pLLXIF", "IMG_6972"),
    P("15_qS7dq3DQ72t3Klk6crYqtBC8w1u8US", "IMG_6973"),
    P("1N157pmeqj6_K3-KhkMOu3Oa1jwvLtx3W", "IMG_6974"),
  ],
  ai: [
    P("1wegp3_hpszxBZ6lYpou67PvrasQm7iHv", "IMG_6986"),
    P("1ZTWOk6_u-N5OItoxo-kDQbIIi7VfBTp4", "IMG_6987"),
    P("1zKzvBLZSfyRNUIop_TQvb6BZCEEYloBB", "IMG_6988"),
    P("1TV4CgefDyPZDbpPl9zTHbtHoq6Ue_7TW", "IMG_6989"),
    P("1-WsXMRLVA-x4NWxahuq8sybSOqGiWTLN", "IMG_6990"),
    P("1G1htw2VzbMduYvVdjoTXuaENIyBOwBky", "IMG_6991"),
    P("1Ern035h20xZAXU1rU9MflwlVOntt5f44", "IMG_6992"),
    P("1k8yu1tLhax66aWRMx5aGIk_n7cAL8Qhh", "IMG_6993"),
    P("1S0Af_IFJAW8wrmQBl5eP5nczbcPxQH5a", "IMG_6994"),
    P("1BwGkBI3KyP8UxL0YFbHv2IuP-y74vaol", "IMG_0560"),
    P("1yI5OUmLMcjhZ26YnHN8nQA2AxV1YC3cB", "IMG_0561"),
    P("113Y9SokSa8-CnoHyU_SBwv11tvRKzAAo", "IMG_0562"),
    P("1zCQqwcQSSiqhocnp0t_i6PrESU8TzOie", "IMG_0563"),
    P("1-2HjWgQ541x3YhWVyRBr5ePJ-HjPVUsr", "IMG_0564"),
    P("1HZFHPjKa4hNgd9a1yowf8bGuGnSJSbeP", "IMG_0565"),
    P("1GUxtwllv5staFbnrTt-NjxFGIl-RSrE2", "IMG_0566"),
    P("1QyQDpKDjBwmCrk10IcC7HyDyldaRc9_4", "IMG_0567"),
    P("13iPzYJHobSUufxSvjKPLi9_Oew3fDSDM", "IMG_0568"),
    P("1ls9XJthwLVzqOMQpzx425dKYxjqu1bOu", "IMG_0569"),
    P("14CHqpFVFXqLUqJxSbP5ooBo63FA2pKLa", "IMG_0571"),
    P("1XXDJw2oycDugpXyqvpUqTw74wM76zaYo", "IMG_0572"),
    P("1du31-dyFly_8pW9ynLqlxN55PVqN5gCw", "IMG_0573"),
    P("1p8yVkyKv1b01KTWjOh38BDkfiuV2KqrS", "IMG_0574"),
    P("1qOG8CmcbxMOE5COfLKYgE1JkypPolAgH", "IMG_0575"),
    P("1T-M69KybyVj9QSkUq2pmVfmYaBYX44bB", "IMG_0576"),
    P("1-RJtnAPxPFt2hO6EzGAlW5DInLVq7kcP", "IMG_0577"),
    P("1pQU-sx5SipGqhyc6-RcPUXTKYEittldw", "IMG_0578"),
    P("1XdkUQue5Dw0Cov1Veu73pIiSPGxE5ybK", "IMG_0579"),
    P("1ab2qQ4gh1YJJOYOph1WvUXtz_Zg1zmEW", "IMG_0580"),
    P("1en-OIEVilnNMVD8CUwFepg5B_7YMLLjA", "IMG_0581"),
    P("1Upw1bWG0cSa8FwWqvYfceaPbTMRnI9-R", "IMG_0582"),
    P("1MFeIsR0C2RqkVJUB-N4S2m4cF-pdwBlk", "IMG_0583"),
    P("1QpUkGK5JV4odHerI-xxakryTe8G5TOhj", "IMG_0584"),
    P("13jC4amm5QtWpbJ9RkG3QHjpPPVCr_wi3", "IMG_0585"),
    P("15_wrrNn8A9mGVGrYxz6bEneGdBrp6jwN", "IMG_0586"),
    P("1yIQ-bvzkyZoFTEVTpaQ-WDlnrYiBAiy5", "IMG_0587"),
    P("1c-1Xi68HyheQRN15WtN33mu5OfC8VFPL", "IMG_0588"),
  ],
  apple: [
    P("1NvNcx1fFhRlFvvt5thL76BGqWZ29yuEZ", "IMG_7004"),
    P("1EkyN0DQ1bgui4dgf169tYuZSWlQzEesB", "IMG_7005"),
    P("1JlGURZMP9fKSwzMuHZ7oQGgFSG-Y3l-d", "IMG_7006"),
    P("16UUnOvGL2vVxAEzDA2poSSy1DuJb6P4g", "IMG_7007"),
    P("1mCjDMfLHFvtWddSOo0IRSFyhJvpNJSrC", "IMG_7008"),
    P("1VbWHOkZn3UcDFREsqwvcdpzCfd1k7ng9", "IMG_7009"),
    P("1p-wZTRmbTTGvad4xIaXvq4hOJULNjhFf", "IMG_7010"),
    P("1WasM1OsOpZQsnKkVrBBzDd1V9-1cOTlm", "IMG_7011"),
    P("1ZC-iT8K8L_LqfVeFHKB6rjfV1Wtax5hz", "IMG_7012"),
  ],
  drone: [
    P("1dvxUWYMgyBa9Qejqr2Pg7UZeXkX0fLf_", "IMG_6957"),
    P("1OZj4VjP18YzYE8cYVeZzPOLbsI9xUFq7", "IMG_6958"),
    P("1MyxDroeilc9rE3CrudIA6LKy9etQnJIx", "IMG_6959"),
    P("1aUSLge_0L8p6NxFNGEj8P-LlLC7a7I06", "IMG_6960"),
  ],
  mulin: [P("1pVIyBal6AKn5QjEtfyNWSvv7C3tGYvy8", "沐霖互動實境")],
  plaud: [P("1l8heBVj6-o8VB11k9xof-B713wlv97Qk", "IMG_6995"), P("1XVruKqlwNbPQMBkBNZ6FOIjLtOQFbNng", "IMG_6996")],
  plaudref: [P("18HH1LALGPalCvkZVVwwiIAp84FJnlfnW", "plaud1"), P("18vW4Sr3po-lOiYY95ACmGf1znxaQE_uC", "plaud2")],
  thinkmaker: [P("17QNjHE5zbyf33K07NmTpz2wJ6cXy8V7U", "啟思創客")],
  meta: [P("18QarJrda6MVZ_5ngQzyxE8AYKC_n6dQX", "Meta青少年社群安全")],
  moenv: [P("1nG748oWyHnCHwYNA-wO4D9AHkojW4F_C", "IMG_7018"), P("1--t4lhNeF5VqINpF0UrGF2hf2GaNfr_w", "IMG_7019"), P("1WdHxWjUVlJfFsZSFkmQgW5Atdk9ZEw6x", "IMG_7020")],
  tca: [P("1oxc2uJ9hOJL7YUwHx4_pUvDdbJ6WBIH2", "IMG_7023"), P("1hhE6hu8BLUDqmzNH_ktyYxkGN5-xXqid", "IMG_7024")],
  nclib: [P("1KilPkL21YK2wPVsl9iHeHZVLnw8NQ3t4", "國家圖書館")],
  seogeo: [P("1m4Bc1COEKnhCPZyo2btUq_C_RL4nekuV", "SEO與GEO示意圖")],
};

const GROUP_LABEL = {
  edu: "當AI走進教室",
  ai: "AI之上",
  apple: "Apple 傑出學校",
  drone: "無人機",
  mulin: "沐霖互動實境",
  plaud: "PLAUD 展場",
  plaudref: "PLAUD 產品",
  thinkmaker: "啟思創客",
  meta: "Meta 青少年安全",
  moenv: "淨零綠生活",
  tca: "台北市電腦公會",
  nclib: "國家圖書館",
  seogeo: "SEO 與 GEO",
};

const SCHOOLS = [
  { loc: "臺中市", name: "葳格國際學校", slogan: "以科技拓展視野，以教育連結世界。",
    pts: ["卓越領航：K-12 跨學制，重塑教與學的永續價值", "探索創造：串連 Apple 生態系與人工智慧，做專題探究", "全人素養：科技為翼、人文為核心"] },
  { loc: "屏東縣", name: "潮和國小", slogan: "讓數位學習，連結世界與生活。",
    pts: ["探究與表達：用 iPad 紀錄、雙語發表", "自主與包容", "全球公民：永續校園與 SDGs 專案探究"] },
  { loc: "臺北市", name: "志清國小", slogan: "讓每一堂課，回應每一個孩子。",
    pts: ["個人化學習：聽寫輔助寫作", "合作創作：Keynote 與相機製作影片", "親師連結：數位作業與學習歷程"] },
  { loc: "學校故事", name: "鎮東國小", slogan: "從動手參與，走向自主學習。",
    pts: ["跨領域主題課程", "任務導向學習", "教師協作"] },
  { loc: "宜蘭縣", name: "蘇澳國小", slogan: "從家鄉出發，用 iPad 打開孩子的探索力。",
    pts: ["在地探索：南方澳漁港、冷泉、家鄉產業", "數位創作：繪本、電子書、動畫、影片", "自主共創"] },
  { loc: "臺中市", name: "華龍國小", slogan: "匠心傳承，iPad 展創藝。",
    pts: ["閱讀與科技", "文化與探索：社區踏查在地文化", "共享與交流：教師共學、國際學伴交流"] },
];

const thumb = (id, w = 800) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;
const viewUrl = (id) => `https://drive.google.com/file/d/${id}/view`;

// ---------- 單元與選單 ----------
const units = Array.from(document.querySelectorAll(".unit"));
const ids = units.map((u) => u.id);
const menuList = document.getElementById("menuList");
const indicator = document.getElementById("unitIndicator");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const menuEl = document.getElementById("menu");
const pad = (n) => String(n).padStart(2, "0");

units.forEach((u, i) => {
  const b = document.createElement("button");
  b.className = "menu-item";
  b.dataset.go = u.id;
  b.innerHTML = `<span class="no">${pad(i + 1)}</span><i class="bi ${u.dataset.icon}"></i><span>${u.dataset.title}</span>`;
  menuList.appendChild(b);
});

const DESC = {
  "lecture-edu": "學生 e 度學習夥伴與課堂案例",
  "lecture-ai": "定義問題的能力與 L1–L5 金字塔",
  apple: "六所學校的創新教學故事",
  drone: "操作模式與飛行原理",
  mulin: "AI、AR、VR、MR 互動科技",
  plaud: "首屈一指的 AI 筆記工具",
  thinkmaker: "國小 AI 程式創作訓練營",
  meta: "青少年帳號與家長監護",
  moenv: "企業跨界減碳與循環經濟",
  tca: "「APP 出少年！」學生作品展",
  nclib: "國圖到你家：電視與行動閱讀",
  seogeo: "搜尋排名與 AI 推薦",
  album: "全部照片，可依主題篩選",
};
const homeCards = document.getElementById("homeCards");
units.slice(1).forEach((u) => {
  const col = document.createElement("div");
  col.className = "col-md-6";
  col.innerHTML = `<button class="home-card" data-go="${u.id}">
    <div class="ic"><i class="bi ${u.dataset.icon}"></i></div>
    <div><h3>${u.dataset.title}</h3><p>${DESC[u.id] || ""}</p></div></button>`;
  homeCards.appendChild(col);
});

function show(id, push = true) {
  const idx = ids.indexOf(id);
  if (idx < 0) id = "home";
  const i = ids.indexOf(id);
  units.forEach((u) => u.classList.toggle("active", u.id === id));
  menuList.querySelectorAll(".menu-item").forEach((b) => b.classList.toggle("active", b.dataset.go === id));
  indicator.textContent = `${pad(i + 1)} / ${pad(ids.length)}`;
  document.title = (i === 0 ? "" : units[i].dataset.title + "｜") + "2026 教育科技展紀錄";

  const prev = units[i - 1], next = units[i + 1];
  prevBtn.disabled = !prev;
  nextBtn.disabled = !next;
  document.getElementById("prevLabel").textContent = prev ? prev.dataset.title : "";
  document.getElementById("nextLabel").textContent = next ? next.dataset.title : "";
  prevBtn.dataset.go = prev ? prev.id : "";
  nextBtn.dataset.go = next ? next.id : "";

  if (push) history.replaceState(null, "", "#" + id);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-go]");
  if (!t || !t.dataset.go) return;
  e.preventDefault();
  const off = bootstrap.Offcanvas.getInstance(menuEl);
  if (off && menuEl.classList.contains("show")) {
    menuEl.addEventListener("hidden.bs.offcanvas", () => show(t.dataset.go), { once: true });
    off.hide();
  } else {
    show(t.dataset.go);
  }
});

window.addEventListener("hashchange", () => show(location.hash.slice(1), false));
document.addEventListener("keydown", (e) => {
  if (e.target.matches("input,textarea") || document.querySelector(".modal.show")) return;
  const cur = ids.findIndex((id) => document.getElementById(id).classList.contains("active"));
  if (e.key === "ArrowRight" && cur < ids.length - 1) show(ids[cur + 1]);
  if (e.key === "ArrowLeft" && cur > 0) show(ids[cur - 1]);
});

// ---------- Apple 學校卡 ----------
document.getElementById("schoolCards").innerHTML = SCHOOLS.map((s) => `
  <div class="col-md-6 col-lg-4"><div class="school">
    <div class="loc">${s.loc}</div>
    <h4>${s.name}</h4>
    <div class="slogan">${s.slogan}</div>
    <ul>${s.pts.map((p) => `<li>${p}</li>`).join("")}</ul>
  </div></div>`).join("");

// ---------- 相簿與燈箱 ----------
let lbList = [];
let lbIndex = 0;
const lbModal = new bootstrap.Modal(document.getElementById("lightbox"));

function photoButton(p, list, i) {
  const b = document.createElement("button");
  b.className = "ph";
  b.type = "button";
  b.setAttribute("aria-label", `放大 ${p.name}`);
  const img = document.createElement("img");
  img.loading = "lazy";
  img.alt = `${GROUP_LABEL[p.group] || ""} ${p.name}`;
  img.src = thumb(p.id, 500);
  img.onerror = () => { img.style.display = "none"; };
  b.appendChild(img);
  b.addEventListener("click", () => openLightbox(list, i));
  return b;
}

function renderGallery(el, list) {
  el.innerHTML = "";
  list.forEach((p, i) => el.appendChild(photoButton(p, list, i)));
}

function openLightbox(list, i) {
  lbList = list;
  lbIndex = i;
  updateLightbox();
  lbModal.show();
}
function updateLightbox() {
  const p = lbList[lbIndex];
  document.getElementById("lbImg").src = thumb(p.id, 1600);
  document.getElementById("lbImg").alt = p.name;
  document.getElementById("lbCaption").textContent = `${GROUP_LABEL[p.group] || ""}　${p.name}　(${lbIndex + 1}/${lbList.length})`;
  document.getElementById("lbOpen").href = viewUrl(p.id);
}
document.getElementById("lbPrev").addEventListener("click", () => { lbIndex = (lbIndex - 1 + lbList.length) % lbList.length; updateLightbox(); });
document.getElementById("lbNext").addEventListener("click", () => { lbIndex = (lbIndex + 1) % lbList.length; updateLightbox(); });
document.getElementById("lightbox").addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") document.getElementById("lbPrev").click();
  if (e.key === "ArrowRight") document.getElementById("lbNext").click();
});

// 為每張照片標記所屬主題
Object.keys(PHOTOS).forEach((k) => PHOTOS[k].forEach((p) => (p.group = k)));
const ALL = Object.values(PHOTOS).flat();

document.querySelectorAll("[data-gallery]").forEach((el) => {
  const key = el.dataset.gallery;
  if (key !== "all") renderGallery(el, PHOTOS[key]);
});

// 照片牆篩選
const filters = document.getElementById("filters");
const grid = document.getElementById("albumGrid");
const filterDefs = [["all", `全部 (${ALL.length})`], ...Object.keys(PHOTOS).map((k) => [k, `${GROUP_LABEL[k]} (${PHOTOS[k].length})`])];
filterDefs.forEach(([k, label], i) => {
  const b = document.createElement("button");
  b.className = "btn btn-sm " + (i === 0 ? "btn-primary" : "btn-outline-primary");
  b.textContent = label;
  b.addEventListener("click", () => {
    filters.querySelectorAll(".btn").forEach((x) => (x.className = "btn btn-sm btn-outline-primary"));
    b.className = "btn btn-sm btn-primary";
    renderGallery(grid, k === "all" ? ALL : PHOTOS[k]);
  });
  filters.appendChild(b);
});
renderGallery(grid, ALL);

// ---------- 初始化 ----------
show(location.hash.slice(1) || "home", false);
