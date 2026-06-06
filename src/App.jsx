import { useState, useEffect, useRef } from "react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700;900&display=swap');
@keyframes sway { 0%,100%{transform:rotate(-1.8deg)} 50%{transform:rotate(1.8deg)} }
@keyframes tailL { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(-10deg)} }
@keyframes tailR { 0%,100%{transform:rotate(3deg)} 50%{transform:rotate(10deg)} }
@keyframes crownBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
@keyframes blink { 0%,92%,100%{transform:scaleY(1)} 96%{transform:scaleY(0.08)} }
@keyframes twinkleA { 0%,100%{opacity:0.25;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.25)} }
@keyframes floatHeart { 0%{transform:translateY(0);opacity:0} 10%{opacity:0.8} 90%{opacity:0.6} 100%{transform:translateY(-110vh);opacity:0} }
@keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
@keyframes pop { 0%{transform:scale(0.5);opacity:0} 65%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
@keyframes shimmer { 0%{background-position:-250% center} 100%{background-position:250% center} }
@keyframes spin { to{transform:rotate(360deg)} }
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.94)} }
@keyframes fillBar { from{width:0} }
@keyframes wiggle { 0%,100%{transform:rotate(-4deg)} 50%{transform:rotate(4deg)} }
@keyframes charPop { 0%{transform:scale(0) rotate(-10deg);opacity:0} 70%{transform:scale(1.12) rotate(2deg)} 100%{transform:scale(1) rotate(0deg);opacity:1} }
@keyframes genderPop { 0%{transform:scale(0.8);opacity:0} 100%{transform:scale(1);opacity:1} }
.opt:hover{transform:translateY(-3px)!important;box-shadow:0 10px 28px rgba(0,0,0,0.25)!important}
.opt:active{transform:scale(0.97)!important}
.cta-btn:hover{transform:translateY(-3px) scale(1.02)!important;filter:brightness(1.1)}
.gender-btn:hover{transform:translateY(-6px) scale(1.04)!important}
.start-btn:hover{transform:translateY(-4px) scale(1.02)!important}
::-webkit-scrollbar{width:0}
`;

// ════════════════════════════════════════════════════════
// 女性キャラ SVG (12体)
// ════════════════════════════════════════════════════════
function FireQueen({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="fq_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#ffd0e0" stopOpacity="0.8"/><stop offset="100%" stopColor="#ff8aa0" stopOpacity="0"/></radialGradient><linearGradient id="fq_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff6b8a"/><stop offset="100%" stopColor="#d63a5e"/></linearGradient><linearGradient id="fq_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff7a95"/><stop offset="100%" stopColor="#e8506a"/></linearGradient><linearGradient id="fq_c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffe78a"/><stop offset="100%" stopColor="#ffc04a"/></linearGradient><radialGradient id="fq_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#ff9aae" stopOpacity="0.9"/><stop offset="100%" stopColor="#ff9aae" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#fq_g)"/><g style={{animation:"sway 3.5s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M70 165 Q100 155 130 165 L145 215 Q100 228 55 215 Z" fill="url(#fq_d)"/><path d="M55 215 Q72 222 88 215 Q100 220 112 215 Q128 222 145 215 L143 222 Q100 232 57 222 Z" fill="#ffb3c4"/><path d="M82 162 Q100 172 118 162 L114 175 Q100 182 86 175 Z" fill="#ffd966"/><ellipse cx="62" cy="180" rx="9" ry="16" fill="#ffe0d0" transform="rotate(-20 62 180)"/><ellipse cx="138" cy="180" rx="9" ry="16" fill="#ffe0d0" transform="rotate(20 138 180)"/><circle cx="100" cy="105" r="58" fill="#ffe8da"/><path d="M44 100 Q40 160 55 175 L60 130 Z" fill="url(#fq_h)"/><path d="M156 100 Q160 160 145 175 L140 130 Z" fill="url(#fq_h)"/><path d="M48 95 Q45 45 100 42 Q155 45 152 95 Q150 70 100 66 Q50 70 48 95 Z" fill="url(#fq_h)"/><path d="M50 92 Q55 62 75 60 Q70 78 80 82 Q72 64 95 62 Q90 80 100 82 Q98 64 118 62 Q112 80 122 80 Q128 64 148 70 Q152 80 150 92 Q140 74 100 74 Q60 74 50 92 Z" fill="url(#fq_h)"/><ellipse cx="38" cy="115" rx="18" ry="33" fill="url(#fq_h)" style={{animation:"tailL 3s ease-in-out infinite",transformOrigin:"45px 90px"}}/><ellipse cx="162" cy="115" rx="18" ry="33" fill="url(#fq_h)" style={{animation:"tailR 3s ease-in-out infinite",transformOrigin:"155px 90px"}}/><g style={{animation:"crownBob 3.5s ease-in-out infinite",transformOrigin:"100px 50px"}}><path d="M72 52 L78 30 L90 46 L100 26 L110 46 L122 30 L128 52 Z" fill="url(#fq_c)" stroke="#f0a830" strokeWidth="1.5"/><circle cx="100" cy="26" r="4.5" fill="#ff4d7a"/><circle cx="78" cy="30" r="4" fill="#ff6b8a"/><circle cx="122" cy="30" r="4" fill="#ff6b8a"/></g><ellipse cx="72" cy="118" rx="11" ry="8" fill="url(#fq_k)"/><ellipse cx="128" cy="118" rx="11" ry="8" fill="url(#fq_k)"/><g style={{animation:"blink 4s infinite",transformOrigin:"center 108px"}}><ellipse cx="78" cy="108" rx="11" ry="14" fill="#fff"/><ellipse cx="78" cy="110" rx="9" ry="11" fill="#a8304e"/><ellipse cx="78" cy="111" rx="6" ry="8" fill="#e8506a"/><circle cx="81" cy="107" r="3.5" fill="#fff"/><ellipse cx="122" cy="108" rx="11" ry="14" fill="#fff"/><ellipse cx="122" cy="110" rx="9" ry="11" fill="#a8304e"/><ellipse cx="122" cy="111" rx="6" ry="8" fill="#e8506a"/><circle cx="125" cy="107" r="3.5" fill="#fff"/></g><path d="M92 130 Q100 138 108 130" stroke="#d63a5e" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g></svg>)}
function FireDevil({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="fd_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#ffc0a0" stopOpacity="0.8"/><stop offset="100%" stopColor="#ff8a5a" stopOpacity="0"/></radialGradient><linearGradient id="fd_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff8a4a"/><stop offset="100%" stopColor="#e85a2a"/></linearGradient><linearGradient id="fd_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff7a5a"/><stop offset="100%" stopColor="#e8502a"/></linearGradient><radialGradient id="fd_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#ff9a7a" stopOpacity="0.9"/><stop offset="100%" stopColor="#ff9a7a" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#fd_g)"/><g style={{animation:"sway 3.5s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M70 165 Q100 155 130 165 L145 215 Q100 228 55 215 Z" fill="url(#fd_d)"/><path d="M55 215 Q75 222 95 215 Q115 222 145 215 L143 222 Q100 232 57 222 Z" fill="#ffb39a"/><ellipse cx="62" cy="180" rx="9" ry="16" fill="#ffe0d0" transform="rotate(-15 62 180)"/><ellipse cx="138" cy="180" rx="9" ry="16" fill="#ffe0d0" transform="rotate(15 138 180)"/><circle cx="100" cy="105" r="58" fill="#ffe8da"/><path d="M140 200 Q165 195 168 170 Q170 158 160 158" stroke="#e8502a" strokeWidth="5" fill="none" strokeLinecap="round" style={{animation:"tailR 2.5s ease-in-out infinite",transformOrigin:"150px 190px"}}/><path d="M157 152 l8 -2 l-4 8 z" fill="#e8502a"/><path d="M46 108 Q42 50 100 44 Q158 50 154 108 Q156 128 148 138 L150 95 Q150 68 100 66 Q50 68 50 95 L52 138 Q44 128 46 108 Z" fill="url(#fd_h)"/><path d="M50 92 Q58 60 80 62 Q74 80 86 82 Q80 64 100 64 Q120 64 114 82 Q126 80 120 62 Q142 60 150 92 Q140 74 100 74 Q60 74 50 92 Z" fill="url(#fd_h)"/><path d="M62 56 Q56 38 66 34 Q70 46 72 54 Z" fill="#e8502a"/><path d="M138 56 Q144 38 134 34 Q130 46 128 54 Z" fill="#e8502a"/><ellipse cx="72" cy="118" rx="11" ry="8" fill="url(#fd_k)"/><ellipse cx="128" cy="118" rx="11" ry="8" fill="url(#fd_k)"/><ellipse cx="78" cy="108" rx="11" ry="14" fill="#fff"/><ellipse cx="78" cy="110" rx="9" ry="11" fill="#9a4a1a"/><ellipse cx="78" cy="111" rx="6" ry="8" fill="#e8702a"/><circle cx="81" cy="107" r="3.5" fill="#fff"/><path d="M114 109 Q122 104 130 109" stroke="#9a4a1a" strokeWidth="3" fill="none" strokeLinecap="round"/><path d="M90 132 Q100 136 110 130 Q104 142 90 132 Z" fill="#e8502a"/></g></svg>)}
function FireShy({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="fs_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#ffd0c0" stopOpacity="0.8"/><stop offset="100%" stopColor="#ff9a7a" stopOpacity="0"/></radialGradient><linearGradient id="fs_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d4683a"/><stop offset="100%" stopColor="#a8451a"/></linearGradient><linearGradient id="fs_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e88a6a"/><stop offset="100%" stopColor="#c85a3a"/></linearGradient><radialGradient id="fs_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#ff8a6a" stopOpacity="1"/><stop offset="100%" stopColor="#ff8a6a" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#fs_g)"/><g style={{animation:"sway 4s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M70 165 Q100 155 130 165 L145 215 Q100 228 55 215 Z" fill="url(#fs_d)"/><path d="M55 215 Q75 222 95 215 Q115 222 145 215 L143 222 Q100 232 57 222 Z" fill="#f0b3a0"/><ellipse cx="62" cy="182" rx="9" ry="16" fill="#ffe0d0" transform="rotate(-8 62 182)"/><ellipse cx="138" cy="182" rx="9" ry="16" fill="#ffe0d0" transform="rotate(8 138 182)"/><circle cx="100" cy="105" r="58" fill="#ffe8da"/><path d="M42 105 Q38 175 52 195 L62 130 Z" fill="url(#fs_h)"/><path d="M158 105 Q162 175 148 195 L138 130 Z" fill="url(#fs_h)"/><path d="M46 95 Q44 48 100 44 Q156 48 154 95 Q152 70 100 66 Q48 70 46 95 Z" fill="url(#fs_h)"/><path d="M48 96 Q52 64 72 62 Q68 82 80 84 Q74 64 100 64 Q126 64 120 84 Q132 82 128 62 Q148 64 152 96 Q140 76 100 76 Q60 76 48 96 Z" fill="url(#fs_h)"/><path d="M100 30 Q108 42 100 50 Q92 42 100 30 Z" fill="#ff7a4a" style={{animation:"crownBob 2s ease-in-out infinite",transformOrigin:"100px 45px"}} opacity="0.85"/><ellipse cx="70" cy="120" rx="12" ry="9" fill="url(#fs_k)"/><ellipse cx="130" cy="120" rx="12" ry="9" fill="url(#fs_k)"/><g style={{animation:"blink 5s infinite",transformOrigin:"center 110px"}}><ellipse cx="78" cy="110" rx="10" ry="12" fill="#fff"/><ellipse cx="78" cy="113" rx="8" ry="9" fill="#8a3a1a"/><ellipse cx="78" cy="114" rx="5" ry="6" fill="#c85a2a"/><circle cx="80" cy="110" r="3" fill="#fff"/><ellipse cx="122" cy="110" rx="10" ry="12" fill="#fff"/><ellipse cx="122" cy="113" rx="8" ry="9" fill="#8a3a1a"/><ellipse cx="122" cy="114" rx="5" ry="6" fill="#c85a2a"/><circle cx="124" cy="110" r="3" fill="#fff"/></g><path d="M94 132 Q100 136 106 132" stroke="#c85a3a" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g></svg>)}
function WaterSaint({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="ws_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#ffd0e8" stopOpacity="0.8"/><stop offset="100%" stopColor="#ff8ac8" stopOpacity="0"/></radialGradient><linearGradient id="ws_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffb3d9"/><stop offset="100%" stopColor="#e85aa8"/></linearGradient><linearGradient id="ws_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffaad4"/><stop offset="100%" stopColor="#e85a9a"/></linearGradient><radialGradient id="ws_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#ff9ac8" stopOpacity="0.9"/><stop offset="100%" stopColor="#ff9ac8" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#ws_g)"/><g style={{animation:"sway 3.8s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M70 165 Q100 155 130 165 L145 215 Q100 228 55 215 Z" fill="url(#ws_d)"/><path d="M55 215 Q70 222 85 215 Q100 222 115 215 Q130 222 145 215 L143 222 Q100 232 57 222 Z" fill="#ffd0e8"/><ellipse cx="62" cy="180" rx="9" ry="16" fill="#ffe8da" transform="rotate(-18 62 180)"/><ellipse cx="138" cy="180" rx="9" ry="16" fill="#ffe8da" transform="rotate(18 138 180)"/><circle cx="100" cy="105" r="58" fill="#ffeada"/><path d="M42 105 Q38 170 54 190 L62 130 Z" fill="url(#ws_h)"/><path d="M158 105 Q162 170 146 190 L138 130 Z" fill="url(#ws_h)"/><path d="M46 95 Q44 46 100 42 Q156 46 154 95 Q152 68 100 64 Q48 68 46 95 Z" fill="url(#ws_h)"/><path d="M48 94 Q54 62 76 62 Q70 82 82 84 Q76 64 100 64 Q124 64 118 84 Q130 82 124 62 Q146 62 152 94 Q140 74 100 74 Q60 74 48 94 Z" fill="url(#ws_h)"/><ellipse cx="100" cy="40" rx="26" ry="7" fill="none" stroke="#ffe78a" strokeWidth="4" style={{animation:"crownBob 3s ease-in-out infinite",transformOrigin:"100px 40px"}}/><ellipse cx="72" cy="120" rx="11" ry="8" fill="url(#ws_k)"/><ellipse cx="128" cy="120" rx="11" ry="8" fill="url(#ws_k)"/><g style={{animation:"blink 4.5s infinite",transformOrigin:"center 108px"}}><ellipse cx="78" cy="108" rx="11" ry="14" fill="#fff"/><ellipse cx="78" cy="110" rx="9" ry="11" fill="#c83a7a"/><ellipse cx="78" cy="111" rx="6" ry="8" fill="#ff7ab0"/><circle cx="81" cy="106" r="3.5" fill="#fff"/><ellipse cx="122" cy="108" rx="11" ry="14" fill="#fff"/><ellipse cx="122" cy="110" rx="9" ry="11" fill="#c83a7a"/><ellipse cx="122" cy="111" rx="6" ry="8" fill="#ff7ab0"/><circle cx="125" cy="106" r="3.5" fill="#fff"/></g><path d="M93 131 Q100 137 107 131" stroke="#c83a7a" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g></svg>)}
function WaterPrincess({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="wp_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#f0d0ff" stopOpacity="0.8"/><stop offset="100%" stopColor="#d68aff" stopOpacity="0"/></radialGradient><linearGradient id="wp_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e0b3ff"/><stop offset="100%" stopColor="#b878e0"/></linearGradient><linearGradient id="wp_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e8c0f0"/><stop offset="100%" stopColor="#c890e0"/></linearGradient><radialGradient id="wp_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#f0a0d8" stopOpacity="0.9"/><stop offset="100%" stopColor="#f0a0d8" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#wp_g)"/><g style={{animation:"sway 4.2s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M68 165 Q100 153 132 165 L148 216 Q100 230 52 216 Z" fill="url(#wp_d)"/><path d="M52 216 Q72 224 92 216 Q112 224 148 216 L146 224 Q100 234 54 224 Z" fill="#f5e0fa"/><ellipse cx="60" cy="182" rx="9" ry="16" fill="#ffeada" transform="rotate(-10 60 182)"/><ellipse cx="140" cy="182" rx="9" ry="16" fill="#ffeada" transform="rotate(10 140 182)"/><circle cx="100" cy="105" r="58" fill="#ffeada"/><path d="M40 105 Q36 178 52 198 L62 128 Z" fill="url(#wp_h)"/><path d="M160 105 Q164 178 148 198 L138 128 Z" fill="url(#wp_h)"/><path d="M44 95 Q42 44 100 40 Q158 44 156 95 Q154 66 100 62 Q46 66 44 95 Z" fill="url(#wp_h)"/><path d="M46 94 Q52 60 78 62 Q70 84 84 86 Q78 64 100 64 Q122 64 116 86 Q130 84 122 62 Q148 60 154 94 Q140 74 100 74 Q60 74 46 94 Z" fill="url(#wp_h)"/><g style={{animation:"crownBob 3.2s ease-in-out infinite",transformOrigin:"100px 52px"}}><path d="M82 56 Q100 40 118 56" stroke="#ffe78a" strokeWidth="3" fill="none"/><circle cx="100" cy="46" r="4" fill="#ff9ac8"/></g><ellipse cx="71" cy="120" rx="12" ry="9" fill="url(#wp_k)"/><ellipse cx="129" cy="120" rx="12" ry="9" fill="url(#wp_k)"/><g style={{animation:"blink 5s infinite",transformOrigin:"center 109px"}}><ellipse cx="77" cy="109" rx="12" ry="15" fill="#fff"/><ellipse cx="77" cy="111" rx="10" ry="12" fill="#8a4ab0"/><ellipse cx="77" cy="112" rx="6.5" ry="9" fill="#b878e0"/><circle cx="80" cy="107" r="4" fill="#fff"/><ellipse cx="123" cy="109" rx="12" ry="15" fill="#fff"/><ellipse cx="123" cy="111" rx="10" ry="12" fill="#8a4ab0"/><ellipse cx="123" cy="112" rx="6.5" ry="9" fill="#b878e0"/><circle cx="126" cy="107" r="4" fill="#fff"/></g><path d="M95 132 Q100 135 105 132" stroke="#a85ac0" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g></svg>)}
function WaterShy({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="wsh_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#c0e8ff" stopOpacity="0.8"/><stop offset="100%" stopColor="#7ac0ff" stopOpacity="0"/></radialGradient><linearGradient id="wsh_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9ac8e8"/><stop offset="100%" stopColor="#5a8ac0"/></linearGradient><linearGradient id="wsh_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a8d0ec"/><stop offset="100%" stopColor="#6aa0d0"/></linearGradient><radialGradient id="wsh_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#ff9ab0" stopOpacity="0.9"/><stop offset="100%" stopColor="#ff9ab0" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#wsh_g)"/><g style={{animation:"sway 4.5s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M70 165 Q100 155 130 165 L145 215 Q100 228 55 215 Z" fill="url(#wsh_d)"/><path d="M55 215 Q75 222 95 215 Q115 222 145 215 L143 222 Q100 232 57 222 Z" fill="#d0e8f5"/><ellipse cx="62" cy="184" rx="9" ry="15" fill="#ffeada" transform="rotate(-6 62 184)"/><ellipse cx="138" cy="184" rx="9" ry="15" fill="#ffeada" transform="rotate(6 138 184)"/><circle cx="100" cy="105" r="58" fill="#ffeada"/><path d="M44 105 Q40 172 54 192 L62 130 Z" fill="url(#wsh_h)"/><path d="M156 105 Q160 172 146 192 L138 130 Z" fill="url(#wsh_h)"/><path d="M46 95 Q44 48 100 44 Q156 48 154 95 Q152 70 100 66 Q48 70 46 95 Z" fill="url(#wsh_h)"/><path d="M48 96 Q54 66 74 64 Q66 86 82 86 Q74 66 100 66 Q126 66 118 86 Q134 86 126 64 Q146 66 152 96 Q140 78 100 78 Q60 78 48 96 Z" fill="url(#wsh_h)"/><path d="M100 34 Q106 44 100 50 Q94 44 100 34 Z" fill="#7ac0ff" opacity="0.85" style={{animation:"crownBob 2.5s ease-in-out infinite",transformOrigin:"100px 44px"}}/><ellipse cx="70" cy="122" rx="13" ry="10" fill="url(#wsh_k)"/><ellipse cx="130" cy="122" rx="13" ry="10" fill="url(#wsh_k)"/><g style={{animation:"blink 5.5s infinite",transformOrigin:"center 111px"}}><ellipse cx="78" cy="111" rx="10" ry="11" fill="#fff"/><ellipse cx="78" cy="114" rx="8" ry="8" fill="#3a6a9a"/><ellipse cx="78" cy="115" rx="5" ry="5.5" fill="#5a8ac0"/><circle cx="80" cy="111" r="2.8" fill="#fff"/><ellipse cx="122" cy="111" rx="10" ry="11" fill="#fff"/><ellipse cx="122" cy="114" rx="8" ry="8" fill="#3a6a9a"/><ellipse cx="122" cy="115" rx="5" ry="5.5" fill="#5a8ac0"/><circle cx="124" cy="111" r="2.8" fill="#fff"/></g><path d="M93 132 Q97 135 100 132 Q103 135 107 132" stroke="#6a90b0" strokeWidth="2.2" fill="none" strokeLinecap="round"/></g></svg>)}
function EarthQueen({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="eq_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#e8c0f0" stopOpacity="0.8"/><stop offset="100%" stopColor="#c878e0" stopOpacity="0"/></radialGradient><linearGradient id="eq_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c89ad8"/><stop offset="100%" stopColor="#9a5ac0"/></linearGradient><linearGradient id="eq_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c890d8"/><stop offset="100%" stopColor="#a05ac0"/></linearGradient><radialGradient id="eq_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#e89ad0" stopOpacity="0.8"/><stop offset="100%" stopColor="#e89ad0" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#eq_g)"/><g style={{animation:"sway 3.6s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M72 165 Q100 156 128 165 L142 215 Q100 226 58 215 Z" fill="url(#eq_d)"/><path d="M58 215 Q78 221 98 215 Q118 221 142 215 L140 222 Q100 230 60 222 Z" fill="#e0c0ec"/><ellipse cx="64" cy="180" rx="8" ry="16" fill="#ffe8da" transform="rotate(-12 64 180)"/><ellipse cx="136" cy="180" rx="8" ry="16" fill="#ffe8da" transform="rotate(12 136 180)"/><circle cx="100" cy="105" r="58" fill="#ffeada"/><path d="M44 100 Q40 180 50 200 L60 120 Z" fill="url(#eq_h)"/><path d="M156 100 Q160 180 150 200 L140 120 Z" fill="url(#eq_h)"/><path d="M46 95 Q44 46 100 42 Q156 46 154 95 Q152 68 100 64 Q48 68 46 95 Z" fill="url(#eq_h)"/><path d="M48 92 Q50 60 100 60 Q150 60 152 92 Q150 70 110 70 Q70 70 64 92 Q60 76 48 92 Z" fill="url(#eq_h)"/><path d="M100 34 l6 6 l-6 8 l-6 -8 z" fill="#b0e8ff" stroke="#fff" strokeWidth="1" style={{animation:"twinkleA 2s ease-in-out infinite",transformOrigin:"100px 42px"}}/><ellipse cx="73" cy="119" rx="10" ry="7" fill="url(#eq_k)"/><ellipse cx="127" cy="119" rx="10" ry="7" fill="url(#eq_k)"/><g style={{animation:"blink 5s infinite",transformOrigin:"center 108px"}}><path d="M68 104 Q78 100 88 105 L88 112 Q78 116 68 112 Z" fill="#fff"/><ellipse cx="78" cy="109" rx="8" ry="10" fill="#6a2a9a"/><ellipse cx="78" cy="110" rx="5" ry="7" fill="#9a5ac0"/><circle cx="80" cy="106" r="3" fill="#fff"/><path d="M112 105 Q122 100 132 104 L132 112 Q122 116 112 112 Z" fill="#fff"/><ellipse cx="122" cy="109" rx="8" ry="10" fill="#6a2a9a"/><ellipse cx="122" cy="110" rx="5" ry="7" fill="#9a5ac0"/><circle cx="124" cy="106" r="3" fill="#fff"/></g><path d="M94 131 Q102 135 109 130" stroke="#a05ac0" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g></svg>)}
function EarthPure({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="ep_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#f5e0c8" stopOpacity="0.8"/><stop offset="100%" stopColor="#e0b888" stopOpacity="0"/></radialGradient><linearGradient id="ep_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d8b088"/><stop offset="100%" stopColor="#b08850"/></linearGradient><linearGradient id="ep_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f0e0d0"/><stop offset="100%" stopColor="#d8c0a0"/></linearGradient><radialGradient id="ep_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#ffb098" stopOpacity="0.9"/><stop offset="100%" stopColor="#ffb098" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#ep_g)"/><g style={{animation:"sway 4s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M70 165 Q100 155 130 165 L145 215 Q100 228 55 215 Z" fill="url(#ep_d)"/><path d="M55 215 Q75 222 95 215 Q115 222 145 215 L143 222 Q100 232 57 222 Z" fill="#fff0e0"/><ellipse cx="62" cy="182" rx="9" ry="16" fill="#ffe8da" transform="rotate(-10 62 182)"/><ellipse cx="138" cy="182" rx="9" ry="16" fill="#ffe8da" transform="rotate(10 138 182)"/><circle cx="100" cy="105" r="58" fill="#ffeada"/><path d="M44 105 Q40 165 56 185 L62 128 Z" fill="url(#ep_h)"/><path d="M156 105 Q160 165 144 185 L138 128 Z" fill="url(#ep_h)"/><path d="M46 95 Q44 48 100 44 Q156 48 154 95 Q152 70 100 66 Q48 70 46 95 Z" fill="url(#ep_h)"/><path d="M48 94 Q54 64 78 64 Q72 84 84 86 Q78 66 100 66 Q122 66 116 86 Q128 84 122 64 Q146 64 152 94 Q140 76 100 76 Q60 76 48 94 Z" fill="url(#ep_h)"/><g style={{animation:"crownBob 3.5s ease-in-out infinite",transformOrigin:"56px 100px"}}><path d="M50 96 l-12 -6 l4 12 z" fill="#ffb3c4"/><path d="M50 96 l-12 6 l4 -12 z" fill="#ff9ab0"/><circle cx="50" cy="96" r="3" fill="#ff7a95"/></g><ellipse cx="71" cy="121" rx="12" ry="9" fill="url(#ep_k)"/><ellipse cx="129" cy="121" rx="12" ry="9" fill="url(#ep_k)"/><g style={{animation:"blink 4.5s infinite",transformOrigin:"center 109px"}}><ellipse cx="78" cy="109" rx="11" ry="13" fill="#fff"/><ellipse cx="78" cy="111" rx="9" ry="10" fill="#7a5020"/><ellipse cx="78" cy="112" rx="6" ry="7" fill="#a87830"/><circle cx="81" cy="107" r="3.5" fill="#fff"/><ellipse cx="122" cy="109" rx="11" ry="13" fill="#fff"/><ellipse cx="122" cy="111" rx="9" ry="10" fill="#7a5020"/><ellipse cx="122" cy="112" rx="6" ry="7" fill="#a87830"/><circle cx="125" cy="107" r="3.5" fill="#fff"/></g><path d="M93 131 Q100 137 107 131" stroke="#b08850" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g></svg>)}
function EarthCautious({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="ec_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#e0e8c8" stopOpacity="0.8"/><stop offset="100%" stopColor="#a8c080" stopOpacity="0"/></radialGradient><linearGradient id="ec_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a89858"/><stop offset="100%" stopColor="#786838"/></linearGradient><linearGradient id="ec_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c0c890"/><stop offset="100%" stopColor="#90a060"/></linearGradient><radialGradient id="ec_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#f0a080" stopOpacity="0.8"/><stop offset="100%" stopColor="#f0a080" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#ec_g)"/><g style={{animation:"sway 4.5s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M70 165 Q100 155 130 165 L145 215 Q100 228 55 215 Z" fill="url(#ec_d)"/><path d="M55 215 Q75 222 95 215 Q115 222 145 215 L143 222 Q100 232 57 222 Z" fill="#e0e8b8"/><ellipse cx="62" cy="183" rx="9" ry="15" fill="#ffe8da" transform="rotate(-8 62 183)"/><ellipse cx="138" cy="183" rx="9" ry="15" fill="#ffe8da" transform="rotate(8 138 183)"/><circle cx="100" cy="105" r="58" fill="#ffeada"/><path d="M46 108 Q42 56 100 50 Q158 56 154 108 Q156 126 148 136 L150 96 Q150 70 100 68 Q50 70 50 96 L52 136 Q44 126 46 108 Z" fill="url(#ec_h)"/><path d="M50 94 Q56 64 78 64 Q72 84 86 84 Q80 66 100 66 Q120 66 114 84 Q128 84 122 64 Q144 64 150 94 Q140 76 100 76 Q60 76 50 94 Z" fill="url(#ec_h)"/><ellipse cx="71" cy="120" rx="11" ry="8" fill="url(#ec_k)"/><ellipse cx="129" cy="120" rx="11" ry="8" fill="url(#ec_k)"/><circle cx="78" cy="110" r="15" fill="none" stroke="#6a5a30" strokeWidth="2.5" opacity="0.7"/><circle cx="122" cy="110" r="15" fill="none" stroke="#6a5a30" strokeWidth="2.5" opacity="0.7"/><path d="M93 110 L107 110" stroke="#6a5a30" strokeWidth="2.5" opacity="0.7"/><g style={{animation:"blink 5s infinite",transformOrigin:"center 110px"}}><ellipse cx="78" cy="110" rx="9" ry="11" fill="#fff"/><ellipse cx="78" cy="112" rx="7" ry="8" fill="#5a4a20"/><ellipse cx="78" cy="113" rx="4.5" ry="5.5" fill="#8a7030"/><circle cx="80" cy="108" r="2.8" fill="#fff"/><ellipse cx="122" cy="110" rx="9" ry="11" fill="#fff"/><ellipse cx="122" cy="112" rx="7" ry="8" fill="#5a4a20"/><ellipse cx="122" cy="113" rx="4.5" ry="5.5" fill="#8a7030"/><circle cx="124" cy="108" r="2.8" fill="#fff"/></g><path d="M95 132 L105 132" stroke="#90a060" strokeWidth="2.2" fill="none" strokeLinecap="round"/></g></svg>)}
function AirFree({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="af_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#c0ecf5" stopOpacity="0.8"/><stop offset="100%" stopColor="#7ad0e8" stopOpacity="0"/></radialGradient><linearGradient id="af_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#9ad8e8"/><stop offset="100%" stopColor="#5ab0d8"/></linearGradient><linearGradient id="af_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a0dcec"/><stop offset="100%" stopColor="#5ab0d8"/></linearGradient><radialGradient id="af_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#90c8e0" stopOpacity="0.8"/><stop offset="100%" stopColor="#90c8e0" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#af_g)"/><g style={{animation:"sway 3.2s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M70 165 Q100 155 130 165 L145 215 Q100 228 55 215 Z" fill="url(#af_d)"/><path d="M55 215 Q75 222 95 215 Q115 222 145 215 L143 222 Q100 232 57 222 Z" fill="#cceef5"/><ellipse cx="62" cy="180" rx="9" ry="16" fill="#ffeada" transform="rotate(-22 62 180)"/><ellipse cx="138" cy="180" rx="9" ry="16" fill="#ffeada" transform="rotate(22 138 180)"/><circle cx="100" cy="105" r="58" fill="#ffeada"/><path d="M42 100 Q34 150 48 180 Q42 155 56 130 Z" fill="url(#af_h)" style={{animation:"tailL 2.8s ease-in-out infinite",transformOrigin:"48px 100px"}}/><path d="M158 100 Q166 150 152 180 Q158 155 144 130 Z" fill="url(#af_h)" style={{animation:"tailR 2.8s ease-in-out infinite",transformOrigin:"152px 100px"}}/><path d="M46 95 Q44 46 100 42 Q156 46 154 95 Q152 68 100 64 Q48 68 46 95 Z" fill="url(#af_h)"/><path d="M48 93 Q56 60 80 64 Q72 84 86 84 Q80 64 100 64 Q120 64 114 84 Q128 84 120 64 Q144 60 152 93 Q140 74 100 74 Q60 74 48 93 Z" fill="url(#af_h)"/><g style={{animation:"crownBob 2s ease-in-out infinite",transformOrigin:"138px 72px"}}><ellipse cx="135" cy="70" rx="6" ry="8" fill="#7ad0e8" opacity="0.85"/><ellipse cx="143" cy="70" rx="6" ry="8" fill="#90d8f0" opacity="0.85"/></g><ellipse cx="72" cy="119" rx="10" ry="7" fill="url(#af_k)"/><ellipse cx="128" cy="119" rx="10" ry="7" fill="url(#af_k)"/><ellipse cx="78" cy="108" rx="11" ry="13" fill="#fff"/><ellipse cx="78" cy="110" rx="9" ry="10" fill="#2a6a9a"/><ellipse cx="78" cy="111" rx="6" ry="7" fill="#4a9ac8"/><circle cx="81" cy="106" r="3.5" fill="#fff"/><path d="M114 108 Q122 113 130 108" stroke="#2a6a9a" strokeWidth="3" fill="none" strokeLinecap="round"/><path d="M92 130 Q100 137 108 130" stroke="#3a8ab0" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g></svg>)}
function AirHealer({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="ah_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#c8f0d8" stopOpacity="0.8"/><stop offset="100%" stopColor="#8ad8a8" stopOpacity="0"/></radialGradient><linearGradient id="ah_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a8d8b8"/><stop offset="100%" stopColor="#6ab088"/></linearGradient><linearGradient id="ah_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b8e0c8"/><stop offset="100%" stopColor="#7ac0a0"/></linearGradient><radialGradient id="ah_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#90d0a8" stopOpacity="0.8"/><stop offset="100%" stopColor="#90d0a8" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#ah_g)"/><g style={{animation:"sway 4.3s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M70 165 Q100 155 130 165 L145 215 Q100 228 55 215 Z" fill="url(#ah_d)"/><path d="M55 215 Q75 222 95 215 Q115 222 145 215 L143 222 Q100 232 57 222 Z" fill="#d8f0e0"/><ellipse cx="62" cy="183" rx="9" ry="15" fill="#ffeada" transform="rotate(-8 62 183)"/><ellipse cx="138" cy="183" rx="9" ry="15" fill="#ffeada" transform="rotate(8 138 183)"/><circle cx="100" cy="105" r="58" fill="#ffeada"/><ellipse cx="46" cy="135" rx="16" ry="18" fill="url(#ah_h)" style={{animation:"tailL 3.5s ease-in-out infinite",transformOrigin:"52px 115px"}}/><ellipse cx="154" cy="135" rx="16" ry="18" fill="url(#ah_h)" style={{animation:"tailR 3.5s ease-in-out infinite",transformOrigin:"148px 115px"}}/><path d="M46 95 Q44 48 100 44 Q156 48 154 95 Q152 70 100 66 Q48 70 46 95 Z" fill="url(#ah_h)"/><path d="M48 95 Q54 64 78 64 Q70 86 86 86 Q78 66 100 66 Q122 66 114 86 Q130 86 122 64 Q146 64 152 95 Q140 78 100 78 Q60 78 48 95 Z" fill="url(#ah_h)"/><g style={{animation:"crownBob 3s ease-in-out infinite",transformOrigin:"60px 80px"}}><circle cx="60" cy="80" r="3" fill="#fff"/><circle cx="56" cy="78" r="2.5" fill="#ffd0e0"/><circle cx="64" cy="78" r="2.5" fill="#ffd0e0"/><circle cx="58" cy="83" r="2.5" fill="#ffd0e0"/><circle cx="62" cy="83" r="2.5" fill="#ffd0e0"/></g><ellipse cx="71" cy="121" rx="12" ry="9" fill="url(#ah_k)"/><ellipse cx="129" cy="121" rx="12" ry="9" fill="url(#ah_k)"/><g style={{animation:"blink 5s infinite",transformOrigin:"center 111px"}}><path d="M68 110 Q78 104 88 110" stroke="#4a8a68" strokeWidth="3" fill="none" strokeLinecap="round"/><path d="M112 110 Q122 104 132 110" stroke="#4a8a68" strokeWidth="3" fill="none" strokeLinecap="round"/><ellipse cx="78" cy="113" rx="6" ry="6" fill="#5a9a78"/><circle cx="80" cy="111" r="2" fill="#fff"/><ellipse cx="122" cy="113" rx="6" ry="6" fill="#5a9a78"/><circle cx="124" cy="111" r="2" fill="#fff"/></g><path d="M93 131 Q100 136 107 131" stroke="#6ab088" strokeWidth="2.5" fill="none" strokeLinecap="round"/></g></svg>)}
function AirMystery({s=180}){return(<svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}><defs><radialGradient id="am_g" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#d0d0f0" stopOpacity="0.8"/><stop offset="100%" stopColor="#9a9ae0" stopOpacity="0"/></radialGradient><linearGradient id="am_h" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b0b0e0"/><stop offset="100%" stopColor="#7a7ac0"/></linearGradient><linearGradient id="am_d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#bcbce8"/><stop offset="100%" stopColor="#8a8ad0"/></linearGradient><radialGradient id="am_k" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#b0a0e0" stopOpacity="0.8"/><stop offset="100%" stopColor="#b0a0e0" stopOpacity="0"/></radialGradient></defs><ellipse cx="100" cy="110" rx="90" ry="95" fill="url(#am_g)"/><g style={{animation:"sway 4.8s ease-in-out infinite",transformOrigin:"100px 200px"}}><path d="M70 165 Q100 155 130 165 L145 215 Q100 228 55 215 Z" fill="url(#am_d)"/><path d="M55 215 Q75 222 95 215 Q115 222 145 215 L143 222 Q100 232 57 222 Z" fill="#d8d8f0"/><ellipse cx="62" cy="183" rx="9" ry="15" fill="#ffeada" transform="rotate(-6 62 183)"/><ellipse cx="138" cy="183" rx="9" ry="15" fill="#ffeada" transform="rotate(6 138 183)"/><circle cx="100" cy="105" r="58" fill="#ffeada"/><path d="M42 102 Q38 185 50 205 L60 125 Z" fill="url(#am_h)"/><path d="M158 102 Q162 185 150 205 L140 125 Z" fill="url(#am_h)"/><path d="M46 95 Q44 46 100 42 Q156 46 154 95 Q152 68 100 64 Q48 68 46 95 Z" fill="url(#am_h)"/><path d="M48 94 Q48 70 100 70 Q152 70 152 94 Q152 76 100 76 Q48 76 48 94 Z" fill="url(#am_h)"/><path d="M96 36 a8 8 0 1 0 8 8 a6 6 0 1 1 -8 -8 z" fill="#ffe78a" style={{animation:"crownBob 4s ease-in-out infinite",transformOrigin:"100px 42px"}}/><ellipse cx="72" cy="120" rx="11" ry="8" fill="url(#am_k)"/><ellipse cx="128" cy="120" rx="11" ry="8" fill="url(#am_k)"/><g style={{animation:"blink 6s infinite",transformOrigin:"center 110px"}}><ellipse cx="78" cy="110" rx="11" ry="12" fill="#fff"/><ellipse cx="78" cy="112" rx="9" ry="9" fill="#4a3a8a"/><ellipse cx="78" cy="113" rx="6" ry="6" fill="#7a6ac0"/><circle cx="80" cy="109" r="3" fill="#fff"/><ellipse cx="122" cy="110" rx="11" ry="12" fill="#fff"/><ellipse cx="122" cy="112" rx="9" ry="9" fill="#4a3a8a"/><ellipse cx="122" cy="113" rx="6" ry="6" fill="#7a6ac0"/><circle cx="124" cy="109" r="3" fill="#fff"/></g><ellipse cx="100" cy="133" rx="3" ry="2.5" fill="#8a7ac0"/></g></svg>)}

// ════════════════════════════════════════════════════════
// 男性キャラ SVG (12体) - ショートヘア・男性的シルエット
// ════════════════════════════════════════════════════════
function MaleBase({s,gid,gc1,gc2,hc1,hc2,sc1,sc2,ck,acc,eyeC,irisC,mouth,hair,accessory,cheekColor,children}){
  return(
    <svg viewBox="0 0 200 240" width={s} height={s*1.2} style={{overflow:"visible"}}>
      <defs>
        <radialGradient id={`${gid}_g`} cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor={gc1} stopOpacity="0.8"/><stop offset="100%" stopColor={gc2} stopOpacity="0"/></radialGradient>
        <linearGradient id={`${gid}_h`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={hc1}/><stop offset="100%" stopColor={hc2}/></linearGradient>
        <linearGradient id={`${gid}_s`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={sc1}/><stop offset="100%" stopColor={sc2}/></linearGradient>
        <radialGradient id={`${gid}_k`} cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={ck} stopOpacity="0.8"/><stop offset="100%" stopColor={ck} stopOpacity="0"/></radialGradient>
      </defs>
      <ellipse cx="100" cy="110" rx="90" ry="95" fill={`url(#${gid}_g)`}/>
      <g style={{animation:"sway 3.8s ease-in-out infinite",transformOrigin:"100px 200px"}}>
        {/* 男性的な体（少し広め） */}
        <path d="M62 168 Q100 156 138 168 L152 218 Q100 230 48 218 Z" fill={`url(#${gid}_s)`}/>
        <path d="M48 218 Q72 225 96 218 Q104 222 112 218 Q136 225 152 218 L150 225 Q100 235 50 225 Z" fill={sc2}/>
        {/* 肩幅広め */}
        <ellipse cx="56" cy="178" rx="11" ry="18" fill="#ffe0d0" transform="rotate(-15 56 178)"/>
        <ellipse cx="144" cy="178" rx="11" ry="18" fill="#ffe0d0" transform="rotate(15 144 178)"/>
        {/* 顔（少し角ばった輪郭） */}
        <path d="M46 105 Q46 58 100 54 Q154 58 154 105 Q154 148 140 158 Q120 168 100 168 Q80 168 60 158 Q46 148 46 105 Z" fill="#ffe8da"/>
        {hair}
        {accessory}
        <ellipse cx="70" cy="120" rx="10" ry="7" fill={`url(#${gid}_k)`}/>
        <ellipse cx="130" cy="120" rx="10" ry="7" fill={`url(#${gid}_k)`}/>
        {/* 目 */}
        <g style={{animation:"blink 4.5s infinite",transformOrigin:"center 108px"}}>
          <ellipse cx="78" cy="108" rx="10" ry="12" fill="#fff"/>
          <ellipse cx="78" cy="110" rx="8" ry="9" fill={eyeC}/>
          <ellipse cx="78" cy="111" rx="5" ry="6" fill={irisC}/>
          <circle cx="80" cy="107" r="3" fill="#fff"/>
          <ellipse cx="122" cy="108" rx="10" ry="12" fill="#fff"/>
          <ellipse cx="122" cy="110" rx="8" ry="9" fill={eyeC}/>
          <ellipse cx="122" cy="111" rx="5" ry="6" fill={irisC}/>
          <circle cx="124" cy="107" r="3" fill="#fff"/>
        </g>
        {/* 眉毛（男性らしく太め） */}
        <path d="M68 97 Q78 93 88 96" stroke={eyeC} strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M112 96 Q122 93 132 97" stroke={eyeC} strokeWidth="3" fill="none" strokeLinecap="round"/>
        {mouth}
        {children}
      </g>
    </svg>
  );
}

// 男性ショートヘアパターン
function ShortHair({gid,hc1,hc2}){return(<g><path d="M50 105 Q48 58 100 54 Q152 58 150 105 Q148 80 100 76 Q52 80 50 105 Z" fill={`url(#${gid}_h)`}/><path d="M52 100 Q58 68 82 66 Q76 82 90 84 Q84 68 100 68 Q116 68 110 84 Q124 82 118 66 Q142 68 148 100 Q136 80 100 80 Q64 80 52 100 Z" fill={hc1}/></g>)}
function SpikeyHair({gid,hc1}){return(<g><path d="M50 105 Q48 56 100 52 Q152 56 150 105 Q148 78 100 74 Q52 78 50 105 Z" fill={`url(#${gid}_h)`}/><path d="M70 64 Q80 44 90 60 Q95 42 100 58 Q105 42 110 60 Q120 44 130 64 Q120 72 100 72 Q80 72 70 64 Z" fill={hc1}/></g>)}
function SideHair({gid,hc1}){return(<g><path d="M48 105 Q46 56 100 52 Q154 56 152 105 Q150 78 100 74 Q50 78 48 105 Z" fill={`url(#${gid}_h)`}/><path d="M50 98 Q52 64 78 64 Q72 84 88 84 Q80 66 100 66 Q152 66 152 98 Q140 78 100 78 Q64 78 50 98 Z" fill={hc1}/><path d="M48 88 Q52 70 64 68 L60 100 Z" fill={hc1}/></g>)}
function CenterHair({gid,hc1}){return(<g><path d="M50 105 Q48 56 100 52 Q152 56 150 105 Q148 78 100 74 Q52 78 50 105 Z" fill={`url(#${gid}_h)`}/><path d="M52 98 Q56 66 80 66 Q74 86 90 86 Q84 68 100 68 Q116 68 110 86 Q126 86 120 66 Q144 66 148 98 Q136 80 100 80 Q64 80 52 98 Z" fill={hc1}/><path d="M96 60 Q100 50 104 60 Q100 68 96 60 Z" fill={hc1}/></g>)}

function MFireHigh({s=180}){return(<MaleBase s={s} gid="mfh" gc1="#ffc0a0" gc2="#ff7a5a" hc1="#e85a2a" hc2="#b83010" sc1="#e86040" sc2="#c04020" ck="#ff9a7a" eyeC="#8a3010" irisC="#c85020" cheekColor="#ff9a7a"
  hair={<SpikeyHair gid="mfh" hc1="#e85a2a"/>}
  accessory={<g style={{animation:"crownBob 2.5s ease-in-out infinite",transformOrigin:"100px 54px"}}><path d="M80 60 L100 44 L120 60" stroke="#ffd966" strokeWidth="3" fill="none"/><circle cx="100" cy="44" r="5" fill="#ff4a4a"/></g>}
  mouth={<path d="M90 132 Q100 140 110 132" stroke="#c04020" strokeWidth="2.5" fill="none" strokeLinecap="round"/>}
/>)}
function MFireMid({s=180}){return(<MaleBase s={s} gid="mfm" gc1="#ffd0b0" gc2="#ff9a6a" hc1="#c84a18" hc2="#a03010" sc1="#d06040" sc2="#a84020" ck="#ffb080" eyeC="#7a3010" irisC="#b84820"
  hair={<SideHair gid="mfm" hc1="#c84a18"/>}
  accessory={<g><path d="M138 180 Q162 175 165 152 Q164 142 156 142" stroke="#c84a18" strokeWidth="4" fill="none" strokeLinecap="round" style={{animation:"tailR 2.5s ease-in-out infinite",transformOrigin:"150px 175px"}}/><path d="M153 136 l7 -2 l-3 7 z" fill="#c84a18"/></g>}
  mouth={<path d="M93 130 Q100 134 107 128 Q104 138 93 130 Z" fill="#c04020"/>}
/>)}
function MFireLow({s=180}){return(<MaleBase s={s} gid="mfl" gc1="#f5d0b8" gc2="#e0a070" hc1="#a05028" hc2="#784020" sc1="#c07850" sc2="#9a5830" ck="#f0a878" eyeC="#6a3a18" irisC="#a06030"
  hair={<ShortHair gid="mfl" hc1="#a05028" hc2="#784020"/>}
  accessory={<path d="M100 44 Q108 52 100 58 Q92 52 100 44 Z" fill="#e07040" opacity="0.8" style={{animation:"crownBob 2s ease-in-out infinite",transformOrigin:"100px 52px"}}/>}
  mouth={<path d="M94 133 Q100 136 106 133" stroke="#a06030" strokeWidth="2.2" fill="none" strokeLinecap="round"/>}
/>)}
function MWaterHigh({s=180}){return(<MaleBase s={s} gid="mwh" gc1="#c8e8ff" gc2="#7ab0e0" hc1="#3a6a9a" hc2="#1a4a7a" sc1="#4a7ab0" sc2="#2a5a90" ck="#90b8e0" eyeC="#1a4a7a" irisC="#3a7ab0"
  hair={<CenterHair gid="mwh" hc1="#3a6a9a"/>}
  accessory={<g style={{animation:"crownBob 3s ease-in-out infinite",transformOrigin:"100px 50px"}}><path d="M78 56 Q100 44 122 56" stroke="#7ac8f0" strokeWidth="2.5" fill="none"/><circle cx="100" cy="48" r="4" fill="#7ac8f0"/></g>}
  mouth={<path d="M93 131 Q100 136 107 131" stroke="#2a5a90" strokeWidth="2.5" fill="none" strokeLinecap="round"/>}
/>)}
function MWaterMid({s=180}){return(<MaleBase s={s} gid="mwm" gc1="#d8c0f0" gc2="#a880e0" hc1="#5a38a0" hc2="#3a1880" sc1="#7a58c0" sc2="#5a38a0" ck="#b090e0" eyeC="#3a1880" irisC="#6a48b0"
  hair={<ShortHair gid="mwm" hc1="#5a38a0" hc2="#3a1880"/>}
  accessory={<g style={{animation:"crownBob 3.5s ease-in-out infinite",transformOrigin:"62px 90px"}}><path d="M56 88 l-10 -5 l3 10 z" fill="#d0b0f0"/><path d="M56 88 l-10 5 l3 -10 z" fill="#b890e0"/><circle cx="56" cy="88" r="3" fill="#9870d0"/></g>}
  mouth={<path d="M94 132 Q100 136 106 132" stroke="#5a38a0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>}
/>)}
function MWaterLow({s=180}){return(<MaleBase s={s} gid="mwl" gc1="#c0d8f0" gc2="#7aa8d8" hc1="#2a5888" hc2="#0a3868" sc1="#4a78a8" sc2="#2a5888" ck="#80a8d0" eyeC="#0a3868" irisC="#2a6898"
  hair={<SideHair gid="mwl" hc1="#2a5888"/>}
  accessory={<path d="M100 40 Q106 50 100 56 Q94 50 100 40 Z" fill="#70b0e0" opacity="0.85" style={{animation:"crownBob 2.5s ease-in-out infinite",transformOrigin:"100px 50px"}}/>}
  mouth={<path d="M93 133 Q97 136 100 133 Q103 136 107 133" stroke="#2a5888" strokeWidth="2" fill="none" strokeLinecap="round"/>}
/>)}
function MEarthHigh({s=180}){return(<MaleBase s={s} gid="meh" gc1="#e0d0f0" gc2="#b090d8" hc1="#1a1a2a" hc2="#0a0a1a" sc1="#4a3870" sc2="#2a1850" ck="#c0a0e0" eyeC="#1a1a2a" irisC="#4a3870"
  hair={<CenterHair gid="meh" hc1="#1a1a2a"/>}
  accessory={<g style={{animation:"twinkleA 2s ease-in-out infinite"}}><path d="M100 40 l5 5 l5 -5 l-5 5 l5 5 l-5 -5 l-5 5 l5 -5 z" fill="#c0a0f0" opacity="0.9"/></g>}
  mouth={<path d="M93 131 Q101 134 109 129" stroke="#2a1850" strokeWidth="2.5" fill="none" strokeLinecap="round"/>}
><path d="M66 97 Q78 93 90 96" stroke="#1a1a2a" strokeWidth="3.5" fill="none" strokeLinecap="round"/><path d="M110 96 Q122 93 134 97" stroke="#1a1a2a" strokeWidth="3.5" fill="none" strokeLinecap="round"/></MaleBase>)}
function MEarthMid({s=180}){return(<MaleBase s={s} gid="mem" gc1="#f0e0d0" gc2="#d0b080" hc1="#5a4020" hc2="#3a2810" sc1="#8a7040" sc2="#6a5020" ck="#e0b880" eyeC="#3a2810" irisC="#6a5020"
  hair={<ShortHair gid="mem" hc1="#5a4020" hc2="#3a2810"/>}
  accessory={<g style={{animation:"crownBob 3.5s ease-in-out infinite",transformOrigin:"145px 92px"}}><path d="M140 88 l10 -5 l-3 10 z" fill="#f0c060"/><path d="M140 88 l10 5 l-3 -10 z" fill="#d8a040"/><circle cx="140" cy="88" r="3" fill="#e8b050"/></g>}
  mouth={<path d="M93 132 Q100 137 107 132" stroke="#6a5020" strokeWidth="2.5" fill="none" strokeLinecap="round"/>}
/>)}
function MEarthLow({s=180}){return(<MaleBase s={s} gid="mel" gc1="#e0e8d0" gc2="#a8c088" hc1="#4a5828" hc2="#2a3810" sc1="#6a7848" sc2="#4a5828" ck="#b0c880" eyeC="#2a3810" irisC="#506030"
  hair={<ShortHair gid="mel" hc1="#4a5828" hc2="#2a3810"/>}
  accessory={<g><circle cx="78" cy="110" r="15" fill="none" stroke="#3a4820" strokeWidth="2.5" opacity="0.7"/><circle cx="122" cy="110" r="15" fill="none" stroke="#3a4820" strokeWidth="2.5" opacity="0.7"/><path d="M93 110 L107 110" stroke="#3a4820" strokeWidth="2.5" opacity="0.7"/></g>}
  mouth={<path d="M95 133 L105 133" stroke="#506030" strokeWidth="2.2" fill="none" strokeLinecap="round"/>}
/>)}
function MAirHigh({s=180}){return(<MaleBase s={s} gid="mah" gc1="#c0f0e8" gc2="#70d0b8" hc1="#1a8070" hc2="#0a6050" sc1="#2a9080" sc2="#1a7060" ck="#80e0d0" eyeC="#0a6050" irisC="#1a9080"
  hair={<SpikeyHair gid="mah" hc1="#1a8070"/>}
  accessory={<g style={{animation:"crownBob 2s ease-in-out infinite",transformOrigin:"62px 76px"}}><ellipse cx="58" cy="74" rx="7" ry="9" fill="#60d0c0" opacity="0.85"/><ellipse cx="68" cy="74" rx="7" ry="9" fill="#80e0d0" opacity="0.85"/></g>}
  mouth={<path d="M90 131 Q100 136 110 131" stroke="#1a7060" strokeWidth="2.5" fill="none" strokeLinecap="round"/>}
/>)}
function MAirMid({s=180}){return(<MaleBase s={s} gid="mam" gc1="#d0f0d8" gc2="#90d0a0" hc1="#286838" hc2="#0a4820" sc1="#389050" sc2="#207030" ck="#90d0a0" eyeC="#0a4820" irisC="#287040"
  hair={<SideHair gid="mam" hc1="#286838"/>}
  accessory={<g style={{animation:"crownBob 3s ease-in-out infinite",transformOrigin:"62px 82px"}}><circle cx="62" cy="82" r="3" fill="#fff"/><circle cx="58" cy="80" r="2.5" fill="#c0f0c0"/><circle cx="66" cy="80" r="2.5" fill="#c0f0c0"/><circle cx="60" cy="85" r="2.5" fill="#c0f0c0"/><circle cx="64" cy="85" r="2.5" fill="#c0f0c0"/></g>}
  mouth={<path d="M93 131 Q100 136 107 131" stroke="#287040" strokeWidth="2.5" fill="none" strokeLinecap="round"/>}
/>)}
function MAirLow({s=180}){return(<MaleBase s={s} gid="mal" gc1="#d8d8f8" gc2="#9898e0" hc1="#383878" hc2="#181858" sc1="#5858a0" sc2="#383880" ck="#a0a0e0" eyeC="#181858" irisC="#4848a0"
  hair={<CenterHair gid="mal" hc1="#383878"/>}
  accessory={<path d="M96 40 a8 8 0 1 0 8 8 a6 6 0 1 1 -8 -8 z" fill="#c0c0f0" style={{animation:"crownBob 4s ease-in-out infinite",transformOrigin:"100px 46px"}}/>}
  mouth={<ellipse cx="100" cy="134" rx="3" ry="2.5" fill="#5858a0"/>}
/>)}

// ════════════════════════════════════════════════════════
// タイプデータ
// ════════════════════════════════════════════════════════
const FEMALE_TYPES = {
  fire_high:{Char:FireQueen,name:"情熱の女王",emoji:"👑",el:"🔥火・積極",c:"#e8506a",a:"#ff9ab0",b1:"#2a0810",b2:"#180408",love:"好きになったら一直線。行動力と情熱で恋の主導権を握るタイプ。太陽みたいな存在で、一緒にいると元気をもらえます。",weak:"勢いで突っ走りすぎて相手のペースを置き去りにしがち。たまには相手に主導権を渡す余裕を。",match:"癒し系の甘えん坊さん",matchKey:"air_mid",pct:94},
  fire_mid:{Char:FireDevil,name:"小悪魔ハンター",emoji:"🔥",el:"🔥火・バランス",c:"#ff6b4a",a:"#ffaa80",b1:"#2a1006",b2:"#180804",love:"自分から追わなくても人が寄ってくる不思議な魅力。無自覚な小悪魔っぷりで相手をドキドキさせる天才です。",weak:"モテるがゆえに本命を見失いがち。駆け引きしすぎて素直になれないことも。",match:"一途で真っ直ぐな人",matchKey:"earth_mid",pct:89},
  fire_low:{Char:FireShy,name:"隠れ情熱女子",emoji:"🌋",el:"🔥火・慎重",c:"#c85a3a",a:"#f0a080",b1:"#281008",b2:"#180804",love:"外見は落ち着いているのに心の中は誰よりも熱い。本当に好きな人の前でだけ情熱が溢れ出します。",weak:"内に秘めすぎて気持ちが全く伝わらないことが多い。もっと自分を表現するだけで恋が動き出します。",match:"ちゃんと見てくれる人",matchKey:"air_mid",pct:91},
  water_high:{Char:WaterSaint,name:"尽くす愛の聖女",emoji:"💗",el:"💧水・積極",c:"#e85a9a",a:"#ffa0c8",b1:"#28081c",b2:"#180410",love:"好きな人のためならどこまでも尽くせる愛情深さの持ち主。あなたに愛された人は世界一大切にされている実感を持てます。",weak:"尽くしすぎて自分を後回しにしがち。たまには自分から甘えることで対等な関係が築けます。",match:"感謝を言葉にできる人",matchKey:"water_mid",pct:96},
  water_mid:{Char:WaterPrincess,name:"儚げ守られ姫",emoji:"🌸",el:"💧水・バランス",c:"#c890e0",a:"#e8b0f0",b1:"#220820",b2:"#140414",love:"ふわっとした雰囲気で自然と守ってあげたいと思わせる愛されタイプ。気づけば相手があなたに尽くしている不思議な引力の持ち主。",weak:"受け身すぎて気持ちが伝わらないことも。たまには自分から一歩踏み出してみて。",match:"リードしてくれる頼れる人",matchKey:"fire_high",pct:91},
  water_low:{Char:WaterShy,name:"奥手な恋わずらい乙女",emoji:"💧",el:"💧水・慎重",c:"#6aa0d0",a:"#a0c8e8",b1:"#081c2a",b2:"#041018",love:"一度好きになるとどっぷりハマって、その人のことばかり考えてしまうタイプ。純粋な恋心に気づいた人はあなたを大切にしたいと思うはずです。",weak:"好きな気持ちが大きすぎて動けなくなってしまう。思いきって一歩踏み出すだけで世界が変わります。",match:"優しくリードしてくれる人",matchKey:"water_high",pct:88},
  earth_high:{Char:EarthQueen,name:"デキる女の本命キラー",emoji:"💎",el:"🌿地・積極",c:"#a05ac0",a:"#c890e0",b1:"#1c0824",b2:"#100416",love:"恋愛も計画的に現実を見据えて進めるしっかり者。一度この人と決めたら誠実に深く愛するタイプ。結婚を見据えた相手から絶大な信頼を得ます。",weak:"現実的すぎて恋のときめきを後回しにしがち。たまには損得抜きで心の声に従ってみて。",match:"誠実で将来を考えられる人",matchKey:"earth_high",pct:93},
  earth_mid:{Char:EarthPure,name:"一途な純愛体質",emoji:"🤍",el:"🌿地・バランス",c:"#b08850",a:"#d8a870",b1:"#221808",b2:"#140e04",love:"一度好きになったらとことん一途。その誠実さと安定感は唯一無二。付き合ったら長続きするタイプ。あなたの愛は静かで深く本物です。",weak:"慎重すぎて恋のチャンスを逃しがち。好きという気持ちを少しだけ外に出してみて。",match:"あなたを見つけてくれる人",matchKey:"fire_mid",pct:92},
  earth_low:{Char:EarthCautious,name:"石橋たたく慎重派",emoji:"🧱",el:"🌿地・慎重",c:"#90a060",a:"#b8c888",b1:"#181e08",b2:"#0e1204",love:"失敗を恐れて慎重に相手を見極めるタイプ。一度決めたら後悔しない恋ができます。その堅実さが誠実な相手には最大の魅力として映ります。",weak:"考えすぎて動けない場面が多い。60点でも動いてみることが大事。",match:"安心感を与えてくれる人",matchKey:"earth_low",pct:87},
  air_high:{Char:AirFree,name:"自由気ままな小悪魔",emoji:"🦋",el:"🌬️風・積極",c:"#5ab0d8",a:"#90d0f0",b1:"#082028",b2:"#041418",love:"恋愛も自分らしく自由に楽しむタイプ。束縛を嫌い、一緒にいて飽きさせない。そのミステリアスな魅力に相手はどんどん惹き込まれます。",weak:"自由を求めるあまり相手に不安を抱かせがち。たまにはちゃんと愛情表現を。",match:"あなたの自由を尊重できる人",matchKey:"air_high",pct:87},
  air_mid:{Char:AirHealer,name:"ふんわり癒し系",emoji:"🕊️",el:"🌬️風・バランス",c:"#7ac0a0",a:"#a0d8b8",b1:"#0a2018",b2:"#041210",love:"穏やかで安心感のある癒しオーラ全開のタイプ。あなたの隣にいると相手は心からリラックスできる。長く一緒にいたいと思わせる魅力の持ち主。",weak:"穏やかすぎて流されがち。たまには自分の「好き」を主張してみて。",match:"あなたを引っ張ってくれる人",matchKey:"fire_high",pct:90},
  air_low:{Char:AirMystery,name:"マイペース不思議ちゃん",emoji:"🌙",el:"🌬️風・慎重",c:"#8a8ad0",a:"#b0a0e8",b1:"#14142a",b2:"#0c0c1a",love:"独特の世界観を持つミステリアスなタイプ。仲良くなるほどその魅力が溢れ出す。相手が「もっと知りたい」と思い続けるので長く愛されます。",weak:"相手には「壁がある」と映ることも。もう少しだけ相手のペースに歩み寄ると関係が深まります。",match:"あなたの世界観を尊重できる人",matchKey:"air_low",pct:89},
};

const MALE_TYPES = {
  fire_high:{Char:MFireHigh,name:"熱血漢リーダー",emoji:"🔥",el:"🔥火・積極",c:"#e05028",a:"#f08060",b1:"#280808",b2:"#180404",love:"好きな人のためなら全力で動く情熱派。率先してリードし、相手を守ることに全力を尽くします。あなたのそばにいると安心感と刺激を同時に感じられます。",weak:"自分のペースで突き進みすぎて相手の気持ちを置いてけぼりにすることも。たまには立ち止まって相手の声を聞いて。",match:"包んでほしい甘えん坊タイプ",matchKey:"water_mid",pct:93},
  fire_mid:{Char:MFireMid,name:"策士な誘い上手",emoji:"😏",el:"🔥火・バランス",c:"#d06030",a:"#f09060",b1:"#241006",b2:"#140804",love:"押したり引いたりの駆け引きが絶妙で、気づけば相手があなたのペースに巻き込まれている。軽やかなのに芯がある、そのギャップが魅力です。",weak:"駆け引きしすぎて「本気なの？」と思われることも。たまには素直に気持ちを見せて。",match:"刺激を楽しめる自由な人",matchKey:"air_high",pct:88},
  fire_low:{Char:MFireLow,name:"隠れロマンチスト",emoji:"🌋",el:"🔥火・慎重",c:"#c06030",a:"#e09060",b1:"#200e06",b2:"#140804",love:"普段はクールに見えるのに、好きな人の前でだけ優しさや情熱が溢れ出す。そのギャップに気づいた人は一生忘れられなくなります。",weak:"シャイすぎて好意がなかなか伝わらない。思い切ったアプローチが恋を動かします。",match:"ちゃんと気づいてくれる繊細な人",matchKey:"water_low",pct:90},
  water_high:{Char:MWaterHigh,name:"一途な守護者",emoji:"🛡️",el:"💧水・積極",c:"#3a6aaa",a:"#7aaad8",b1:"#060e1c",b2:"#040a14",love:"一度好きになったら全力で守り続ける一途タイプ。相手の笑顔のためなら何でもする誠実さが魅力。あなたに愛された人は世界一安心できます。",weak:"尽くしすぎて自分を犠牲にしがち。たまには自分の気持ちも大切に。",match:"甘えることが得意な人",matchKey:"water_high",pct:95},
  water_mid:{Char:MWaterMid,name:"甘えん坊王子",emoji:"🤴",el:"💧水・バランス",c:"#6848b0",a:"#a880e0",b1:"#100820",b2:"#0a0414",love:"甘えることが上手で、相手の母性本能をくすぐる天才。でも大事な時には頼れる一面も。そのギャップに相手はキュンとしてしまいます。",weak:"甘えすぎて相手を疲れさせることも。感謝の気持ちをちゃんと言葉にして。",match:"面倒を見るのが好きな人",matchKey:"water_high",pct:91},
  water_low:{Char:MWaterLow,name:"繊細な共感男子",emoji:"💧",el:"💧水・慎重",c:"#3a6898",a:"#7aaac8",b1:"#060c1a",b2:"#040810",love:"相手の気持ちに寄り添う共感力が高いタイプ。「話を聞いてくれる」「わかってくれる」とパートナーから絶大な信頼を得ます。",weak:"共感しすぎて自分を見失うことも。自分の気持ちも大切にするバランスを意識して。",match:"気持ちをわかってほしいと思っている人",matchKey:"water_low",pct:89},
  earth_high:{Char:MEarthHigh,name:"完璧主義なエリート",emoji:"💎",el:"🌿地・積極",c:"#4a3890",a:"#9080d0",b1:"#0c0818",b2:"#080410",love:"高い目標を持ち、パートナーにも成長を求める向上心タイプ。一緒にいると刺激を受け、あなた自身も成長できます。",weak:"完璧を求めすぎて相手に窮屈さを感じさせることも。たまには「不完全でいい」と思える余裕を。",match:"一緒に高め合いたい向上心のある人",matchKey:"earth_high",pct:92},
  earth_mid:{Char:MEarthMid,name:"堅実な誠実男子",emoji:"🤍",el:"🌿地・バランス",c:"#7a6030",a:"#b09060",b1:"#181008",b2:"#100804",love:"派手さはないけれど、その誠実さと安定感は唯一無二。一度決めたらブレない。一緒にいると自然に「この人と将来を歩みたい」と思わせます。",weak:"安定を求めるあまり変化を嫌いがち。たまにはサプライズで相手をときめかせて。",match:"安心できる関係を求めている人",matchKey:"earth_mid",pct:93},
  earth_low:{Char:MEarthLow,name:"マイルール職人",emoji:"🧱",el:"🌿地・慎重",c:"#5a7040",a:"#90a870",b1:"#101408",b2:"#0a0e04",love:"自分のペースを大切にしながら、相手のことも深くじっくり理解しようとするタイプ。時間をかけて築いた信頼は本物です。",weak:"慎重すぎてチャンスを逃すことも。心を開くまでに時間がかかりすぎると相手が先に諦めてしまうことがあります。",match:"じっくり関係を築きたい人",matchKey:"earth_low",pct:86},
  air_high:{Char:MAirHigh,name:"自由人なワイルド系",emoji:"🦋",el:"🌬️風・積極",c:"#1a8070",a:"#50c0a8",b1:"#041412",b2:"#020c0a",love:"枠にとらわれない自由な発想で、一緒にいると毎日が冒険。束縛せず相手の自由も尊重できる大きな器の持ち主です。",weak:"自由すぎて相手に「大切にされてる？」と不安を与えることも。たまには愛情表現を意識して。",match:"一緒に自由を楽しめる人",matchKey:"fire_mid",pct:88},
  air_mid:{Char:MAirMid,name:"ほんわか癒し系男子",emoji:"🕊️",el:"🌬️風・バランス",c:"#287840",a:"#60b078",b1:"#081408",b2:"#040c04",love:"穏やかで癒しオーラ全開。一緒にいるだけでホッとする安心感が魅力。押しつけがましくなく、相手の存在をそのまま受け入れてくれます。",weak:"優しすぎて頼りなく見られることも。ここぞという時にはしっかりリードする姿を見せて。",match:"ありのままでいたい人",matchKey:"fire_low",pct:91},
  air_low:{Char:MAirLow,name:"ミステリアス孤高系",emoji:"🌙",el:"🌬️風・慎重",c:"#4848a0",a:"#8888d0",b1:"#0c0c1c",b2:"#080814",love:"クールで掴みどころがないのに、ふとした瞬間に見せる優しさに心を奪われる。深く知れば知るほどその魅力にハマります。",weak:"壁を作りすぎて相手が近づけないことも。少しだけ心の扉を開くだけで、ぐっと距離が縮まります。",match:"深みのある関係を求めている人",matchKey:"air_low",pct:88},
};

// ════════════════════════════════════════════════════════
// 相性マトリクス
// ════════════════════════════════════════════════════════
const COMPATIBILITY = {
  "fire_high+fire_high":{pct:58,msg:"情熱同士でぶつかりまくる！喧嘩が絶えないけど、それ以上に燃え上がる刺激的な関係。"},
  "fire_high+fire_mid":{pct:75,msg:"お互い引っ張り合う関係。どちらがリードするか決めると上手くいく。"},
  "fire_high+fire_low":{pct:84,msg:"積極的な女王と隠れた情熱男子。引き出し合えるベストコンビ。"},
  "fire_high+water_high":{pct:88,msg:"情熱的な女王を誠実に守る彼。お互いの強さが支え合う理想の関係。"},
  "fire_high+water_mid":{pct:98,msg:"リードしたい女王と甘える王子。完璧な役割分担でこれ以上ない相性◎！"},
  "fire_high+water_low":{pct:72,msg:"引っ張っていく女王と繊細な彼。彼のペースに合わせる余裕が大事。"},
  "fire_high+earth_high":{pct:63,msg:"情熱vs完璧主義。価値観がぶつかりやすいが、乗り越えたら最強カップルに。"},
  "fire_high+earth_mid":{pct:82,msg:"情熱的な女王と堅実な彼。彼の安定感が女王をより輝かせる。"},
  "fire_high+earth_low":{pct:55,msg:"テンポが全然合わない！でも補い合える関係になれる可能性は秘めている。"},
  "fire_high+air_high":{pct:68,msg:"自由同士で楽しいけど、どちらも引かないので関係が流れやすい。"},
  "fire_high+air_mid":{pct:95,msg:"引っ張りたい女王と癒し系男子。最高のバランス！疲れた時に癒してもらえる。"},
  "fire_high+air_low":{pct:77,msg:"ミステリアスな彼に女王が惹きつけられる。追いかけるうちに本気になる。"},
  "fire_mid+fire_high":{pct:86,msg:"小悪魔と熱血漢。互いに刺激し合う燃え上がる関係。"},
  "fire_mid+fire_mid":{pct:60,msg:"駆け引き同士でなかなか本音を言えない。どちらかが先に壁を壊して。"},
  "fire_mid+fire_low":{pct:83,msg:"小悪魔女子と隠れロマンチスト。引き出し合えると最高の関係に。"},
  "fire_mid+water_high":{pct:79,msg:"駆け引きの女と一途な彼。彼の誠実さに小悪魔が本気になっていく。"},
  "fire_mid+water_mid":{pct:64,msg:"似た者同士でわかり合えるが、甘えの方向が被りやすい。進展しにくいかも。"},
  "fire_mid+water_low":{pct:81,msg:"小悪魔女子が奥手な彼を引っ張る。リードする側が決まると安定する。"},
  "fire_mid+earth_high":{pct:71,msg:"駆け引きvs完璧主義。お互い一歩引かないので刺激的だが疲れることも。"},
  "fire_mid+earth_mid":{pct:93,msg:"小悪魔女子と誠実な彼。彼の真っ直ぐさに小悪魔がだんだん素直になっていく。"},
  "fire_mid+earth_low":{pct:57,msg:"テンポが合わない面が多い。根気よく向き合えれば補い合える関係に。"},
  "fire_mid+air_high":{pct:91,msg:"自由な者同士、縛らない関係が心地いい。同じ方向を向けると最強！"},
  "fire_mid+air_mid":{pct:85,msg:"小悪魔女子と癒し系男子。彼のほんわかさに小悪魔が丸くなっていく。"},
  "fire_mid+air_low":{pct:87,msg:"駆け引き同士。どちらが先に本音を見せるか、の静かな戦い。"},
  "fire_low+fire_high":{pct:83,msg:"隠れ情熱女子と熱血漢。彼がちゃんと見てくれるから安心して本音を出せる。"},
  "fire_low+fire_mid":{pct:84,msg:"静かな情熱と策士の組み合わせ。互いのギャップに惹かれ合う。"},
  "fire_low+fire_low":{pct:52,msg:"お互い遠慮して完全に待ちになりがち。この組み合わせは誰かが勇気を出さないと進まない！"},
  "fire_low+water_high":{pct:87,msg:"隠れ情熱女子の気持ちをちゃんと守護者が受け止めてくれる安心感。"},
  "fire_low+water_mid":{pct:69,msg:"似た雰囲気同士。お互いほんわかしすぎて進展が遅いかも（笑）"},
  "fire_low+water_low":{pct:78,msg:"奥手同士だけど共鳴しやすい。一度距離が縮まると一気に深い関係に。"},
  "fire_low+earth_high":{pct:62,msg:"完璧主義な彼が隠れ情熱女子の魅力に気づくまで時間がかかる。焦らず待って。"},
  "fire_low+earth_mid":{pct:85,msg:"誠実な彼がじっくり隠れ情熱女子を見てくれる。理想的な関係。"},
  "fire_low+earth_low":{pct:66,msg:"慎重者同士。進みがとにかく遅い！でも一歩踏み出したら深まる関係。"},
  "fire_low+air_high":{pct:76,msg:"自由な彼が隠れ情熱女子を引き出してくれる。意外と相性いいコンビ。"},
  "fire_low+air_mid":{pct:94,msg:"癒し系男子が隠れ情熱女子を安心させてくれる。最高の組み合わせ！"},
  "fire_low+air_low":{pct:73,msg:"ミステリアス同士。共鳴するまで時間がかかるが、一度合うと深い。"},
  "water_high+fire_high":{pct:91,msg:"尽くしたい聖女とリードする熱血漢。お互いの役割がはまる理想形。"},
  "water_high+fire_mid":{pct:78,msg:"尽くす聖女の優しさに策士も素直になっていく。時間をかけると本物の関係に。"},
  "water_high+fire_low":{pct:86,msg:"聖女の温かさが隠れロマンチストの心を開かせる。"},
  "water_high+water_high":{pct:82,msg:"守護者と聖女。お互いを大切にする関係。ただ尽くし合いすぎないよう注意。"},
  "water_high+water_mid":{pct:98,msg:"尽くしたい聖女と甘えん坊王子。これ以上ない最強の相性！役割がぴったりすぎる。"},
  "water_high+water_low":{pct:80,msg:"聖女の温かさが繊細な彼を癒す。安心できる関係が自然とできあがる。"},
  "water_high+earth_high":{pct:67,msg:"尽くす聖女と完璧主義エリート。価値観の違いが壁になりやすいが深い信頼に繋がる可能性も。"},
  "water_high+earth_mid":{pct:89,msg:"聖女と誠実男子。お互いの誠実さが共鳴する安定した関係。"},
  "water_high+earth_low":{pct:74,msg:"聖女の温かさが慎重な彼の心を少しずつ開かせていく。"},
  "water_high+air_high":{pct:59,msg:"尽くしたい聖女と自由人。価値観が真逆で疲れることも。相当な覚悟が必要。"},
  "water_high+air_mid":{pct:85,msg:"聖女と癒し系男子。温かさ同士で包み合う穏やかな関係。"},
  "water_high+air_low":{pct:71,msg:"聖女がミステリアスな彼の扉を少しずつ開けていく。根気が必要。"},
  "water_mid+fire_high":{pct:97,msg:"熱血漢に守られる守られ姫。これ以上ない最高の組み合わせ！一生守ってもらえる。"},
  "water_mid+fire_mid":{pct:65,msg:"守られ姫と策士。駆け引きより素直な関係の方がこの二人は絶対上手くいく。"},
  "water_mid+fire_low":{pct:77,msg:"守られ姫の儚さに隠れロマンチストが本気になる。"},
  "water_mid+water_high":{pct:93,msg:"守られ姫と守護者。守る側と守られる側がぴったりはまる最高の関係。"},
  "water_mid+water_mid":{pct:54,msg:"甘えん坊王子と守られ姫。どちらも甘えたいので誰がリードするか全く決まらない（笑）"},
  "water_mid+water_low":{pct:70,msg:"ふんわり同士。穏やかで居心地のいい関係だけど進展が遅いかも。"},
  "water_mid+earth_high":{pct:84,msg:"守られ姫とエリート。彼のリード力が守られ姫をより輝かせる。"},
  "water_mid+earth_mid":{pct:90,msg:"守られ姫と誠実男子。安定した愛情で包まれる理想の関係。"},
  "water_mid+earth_low":{pct:73,msg:"守られ姫と慎重な彼。ゆっくり進む分、関係は深くなる。"},
  "water_mid+air_high":{pct:61,msg:"守られ姫と自由人。自由すぎる彼に不安を感じることが多い。かなりの覚悟が必要。"},
  "water_mid+air_mid":{pct:83,msg:"守られ姫と癒し系男子。ほんわかした居心地のいい関係。"},
  "water_mid+air_low":{pct:79,msg:"守られ姫とミステリアス系。彼の謎めいた魅力にどんどん惹かれていく。"},
  "water_low+fire_high":{pct:80,msg:"奥手乙女を引っ張ってくれる熱血漢。背中を押してもらえる安心感。"},
  "water_low+fire_mid":{pct:76,msg:"奥手乙女と策士。彼が少しずつ心を開かせてくれる。"},
  "water_low+fire_low":{pct:88,msg:"奥手同士の共鳴。一度距離が縮まれば誰よりも深い関係に。"},
  "water_low+water_high":{pct:96,msg:"奥手乙女と守護者。全力で守ってくれる彼の存在に安心感MAX。これは本物の縁。"},
  "water_low+water_mid":{pct:63,msg:"奥手乙女と甘えん坊王子。お互い甘えたくてリードが決まらないかも。"},
  "water_low+water_low":{pct:57,msg:"奥手同士。進展がとにかく遅い！でも一歩踏み出せば急速に深まる可能性あり。"},
  "water_low+earth_high":{pct:81,msg:"奥手乙女とエリート。彼のしっかりした姿が安心感を与えてくれる。"},
  "water_low+earth_mid":{pct:89,msg:"奥手乙女と誠実男子。じっくり時間をかける二人、長続きする理想の関係。"},
  "water_low+earth_low":{pct:68,msg:"慎重者同士。ゆっくりでも確実に深まるが、誰かが先に動かないと始まらない。"},
  "water_low+air_high":{pct:53,msg:"奥手乙女と自由人。価値観が違いすぎて不安が先に立つ。かなりの努力が必要。"},
  "water_low+air_mid":{pct:87,msg:"奥手乙女と癒し系男子。彼の穏やかさが奥手乙女の心を溶かしていく。"},
  "water_low+air_low":{pct:75,msg:"奥手乙女とミステリアス系。互いの深さが共鳴する特別な関係。"},
  "earth_high+fire_high":{pct:69,msg:"デキる女と熱血漢。強者同士のぶつかり合い。認め合えると最強カップルに。"},
  "earth_high+fire_mid":{pct:72,msg:"デキる女と策士。どちらも一歩引かない、でも刺激的な関係。"},
  "earth_high+fire_low":{pct:64,msg:"デキる女と隠れロマンチスト。彼の隠れた優しさに気づくと本気になる。"},
  "earth_high+water_high":{pct:77,msg:"デキる女と守護者。お互いの強さを認め合える対等な関係。"},
  "earth_high+water_mid":{pct:86,msg:"デキる女と甘えん坊王子。彼の甘え方が可愛くてついつい尽くしてしまう。"},
  "earth_high+water_low":{pct:82,msg:"デキる女が繊細な彼を引っ張る。リード役が決まると安定する。"},
  "earth_high+earth_high":{pct:95,msg:"完璧主義同士！向上心が共鳴して一緒に高め合える最高の関係。"},
  "earth_high+earth_mid":{pct:90,msg:"デキる女と誠実男子。価値観が合って安定した信頼関係が築ける。"},
  "earth_high+earth_low":{pct:74,msg:"デキる女と慎重男子。ペースが合えば堅実で長続きする関係に。"},
  "earth_high+air_high":{pct:56,msg:"現実的な女と自由人。価値観が真逆すぎてすれ違いが多い。相当な努力が必要。"},
  "earth_high+air_mid":{pct:80,msg:"デキる女と癒し系男子。彼のほんわかさがデキる女を和らげてくれる。"},
  "earth_high+air_low":{pct:87,msg:"デキる女とミステリアス系。彼の深みにデキる女がどんどんはまっていく。"},
  "earth_mid+fire_high":{pct:81,msg:"一途女子と熱血漢。熱血漢の情熱が一途女子の気持ちを引き出す。"},
  "earth_mid+fire_mid":{pct:92,msg:"一途女子と策士。策士の引きに一途女子が本気になる。相性◎！"},
  "earth_mid+fire_low":{pct:85,msg:"一途女子と隠れロマンチスト。お互いの隠れた深さが共鳴する関係。"},
  "earth_mid+water_high":{pct:89,msg:"一途女子と守護者。守ってくれる安心感に一途女子が一生ついていく。"},
  "earth_mid+water_mid":{pct:84,msg:"一途女子と甘えん坊王子。一途に尽くされる王子は幸せ者。"},
  "earth_mid+water_low":{pct:76,msg:"一途女子と繊細男子。お互いの深さが時間をかけて共鳴する。"},
  "earth_mid+earth_high":{pct:91,msg:"一途女子とエリート。誠実さ同士が共鳴する、信頼ベースの関係。"},
  "earth_mid+earth_mid":{pct:96,msg:"一途同士！浮気の心配ゼロ。ゆっくり深まる最高に安定した関係。"},
  "earth_mid+earth_low":{pct:78,msg:"一途女子と慎重男子。進みはゆっくりでも確実に深まる。"},
  "earth_mid+air_high":{pct:58,msg:"一途女子と自由人。自由人の気まぐれに一途女子が不安を感じやすい。覚悟が必要。"},
  "earth_mid+air_mid":{pct:88,msg:"一途女子と癒し系男子。癒し系の安定感が一途女子を安心させてくれる。"},
  "earth_mid+air_low":{pct:79,msg:"一途女子とミステリアス系。謎めいた彼に一途にはまっていく。"},
  "earth_low+fire_high":{pct:53,msg:"慎重派女子と熱血漢。テンポが全然合わない！でも彼の引っ張り力に救われることも。"},
  "earth_low+fire_mid":{pct:62,msg:"慎重派と策士。駆け引きより誠実に向き合ってほしいと感じることも。"},
  "earth_low+fire_low":{pct:69,msg:"慎重者同士。ゆっくりでも確実に深まる関係。"},
  "earth_low+water_high":{pct:83,msg:"慎重派女子と守護者。守ってくれる存在に少しずつ心を開いていく。"},
  "earth_low+water_mid":{pct:71,msg:"慎重派と甘えん坊王子。彼の素直な甘え方が慎重派の心を溶かす。"},
  "earth_low+water_low":{pct:75,msg:"慎重者同士。時間をかけて築く関係は本物。"},
  "earth_low+earth_high":{pct:72,msg:"慎重派とエリート。似た価値観で安定するが、刺激不足になることも。"},
  "earth_low+earth_mid":{pct:86,msg:"慎重派と誠実男子。じっくり時間をかけた先に深い信頼関係が待っている。"},
  "earth_low+earth_low":{pct:80,msg:"慎重者同士の安定コンビ。進みは遅いが一度結ばれたら長続きする。"},
  "earth_low+air_high":{pct:55,msg:"慎重派と自由人。自由すぎる彼に振り回されてしまう可能性大。"},
  "earth_low+air_mid":{pct:82,msg:"慎重派と癒し系男子。彼の穏やかさが慎重派を安心させてくれる。"},
  "earth_low+air_low":{pct:84,msg:"慎重派とミステリアス系。似たペースで似た深さ。ゆっくり共鳴する関係。"},
  "air_high+fire_high":{pct:67,msg:"自由小悪魔と熱血漢。熱血漢のまっすぐさに自由小悪魔がだんだん惹かれる。"},
  "air_high+fire_mid":{pct:94,msg:"自由小悪魔と策士。お互い縛らない自由な関係が最高にフィット！"},
  "air_high+fire_low":{pct:78,msg:"自由小悪魔と隠れロマンチスト。彼のギャップに自由小悪魔が本気になる。"},
  "air_high+water_high":{pct:60,msg:"自由小悪魔と守護者。尽くされることに慣れていない自由小悪魔が戸惑いやすい。"},
  "air_high+water_mid":{pct:70,msg:"自由小悪魔と甘えん坊王子。お互いの自由が共鳴するが方向性が合わないことも。"},
  "air_high+water_low":{pct:52,msg:"自由小悪魔と繊細男子。価値観の違いが大きい。乗り越えるのはかなり難しい組み合わせ。"},
  "air_high+earth_high":{pct:63,msg:"自由小悪魔と完璧主義。価値観の違いが刺激になることもあるが、すれ違いが多い。"},
  "air_high+earth_mid":{pct:77,msg:"自由小悪魔と誠実男子。誠実さに自由小悪魔が少しずつ本音を見せていく。"},
  "air_high+earth_low":{pct:54,msg:"自由人と慎重男子。テンポが全然合わない。相当な努力が必要な組み合わせ。"},
  "air_high+air_high":{pct:89,msg:"自由人同士！縛らない関係が心地いい。同じ方向を向けると最強。"},
  "air_high+air_mid":{pct:82,msg:"自由小悪魔と癒し系男子。癒し系の安定感が自由小悪魔を落ち着かせる。"},
  "air_high+air_low":{pct:90,msg:"自由小悪魔とミステリアス系。お互いの謎めいた部分に惹かれ合う。"},
  "air_mid+fire_high":{pct:96,msg:"癒し系女子と熱血漢！引っ張ってくれる熱血漢に癒し系が安心して甘える。最高の組み合わせ！"},
  "air_mid+fire_mid":{pct:84,msg:"癒し系と策士。策士の引きに癒し系が自然と応えていく。"},
  "air_mid+fire_low":{pct:92,msg:"癒し系と隠れロマンチスト。癒し系の温かさが隠れロマンチストの扉を開く。"},
  "air_mid+water_high":{pct:85,msg:"癒し系と守護者。温かさ同士で包み合う穏やかな関係。"},
  "air_mid+water_mid":{pct:73,msg:"癒し系と甘えん坊王子。どちらも甘えたいのでリードを決めることが大事。"},
  "air_mid+water_low":{pct:88,msg:"癒し系の温かさが奥手男子の心をじんわり溶かしていく。"},
  "air_mid+earth_high":{pct:79,msg:"癒し系と完璧主義。彼の完璧主義を癒し系が和らげてくれる。"},
  "air_mid+earth_mid":{pct:90,msg:"癒し系と誠実男子。穏やかで安定した、長続きする最高にいい関係。"},
  "air_mid+earth_low":{pct:83,msg:"癒し系と慎重男子。ゆっくりペースが合って自然と深まる関係。"},
  "air_mid+air_high":{pct:81,msg:"癒し系と自由人。自由人を包み込む癒し系の器の大きさが光る。"},
  "air_mid+air_mid":{pct:66,msg:"癒し同士。穏やかで居心地のいい関係だけど刺激が少なくてマンネリしやすい。"},
  "air_mid+air_low":{pct:87,msg:"癒し系とミステリアス系。癒し系の温かさがミステリアス系の心を開かせる。"},
  "air_low+fire_high":{pct:74,msg:"不思議ちゃんと熱血漢。熱血漢の情熱が不思議ちゃんを引き出す。"},
  "air_low+fire_mid":{pct:86,msg:"不思議ちゃんと策士。ミステリアス同士の静かな駆け引きが面白い関係。"},
  "air_low+fire_low":{pct:80,msg:"不思議ちゃんと隠れロマンチスト。深さ同士が共鳴する特別な関係。"},
  "air_low+water_high":{pct:69,msg:"不思議ちゃんと守護者。守護者の誠実さが不思議ちゃんの心を開かせる。"},
  "air_low+water_mid":{pct:77,msg:"不思議ちゃんと甘えん坊王子。ミステリアスな世界に王子がはまっていく。"},
  "air_low+water_low":{pct:82,msg:"不思議ちゃんと繊細男子。深さが共鳴する特別な関係。"},
  "air_low+earth_high":{pct:88,msg:"不思議ちゃんとエリート。エリートが不思議ちゃんの世界に引き込まれる。"},
  "air_low+earth_mid":{pct:76,msg:"不思議ちゃんと誠実男子。誠実さが不思議ちゃんを少しずつ開かせる。"},
  "air_low+earth_low":{pct:85,msg:"不思議ちゃんと慎重男子。似たペース・似た深さ。ゆっくり共鳴する関係。"},
  "air_low+air_high":{pct:90,msg:"不思議ちゃんと自由人。お互いの世界観を尊重し合えるユニークな関係。"},
  "air_low+air_mid":{pct:84,msg:"不思議ちゃんと癒し系男子。癒し系の温かさが不思議ちゃんの心を溶かす。"},
  "air_low+air_low":{pct:92,msg:"ミステリアス同士！深く知れば知るほど惹かれ合う、唯一無二の関係。"},
};

function getCompat(fKey, mKey){
  return COMPATIBILITY[`${fKey}+${mKey}`] || COMPATIBILITY[`${mKey}+${fKey}`] || {pct:80,msg:"互いの個性が引き合う、ユニークな関係。"};
}

// ════════════════════════════════════════════════════════
// 質問
// ════════════════════════════════════════════════════════
const QUESTIONS = [
  {q:"気になる人ができたら、まずどうする？",opts:[{t:"とりあえずSNSを全部さかのぼってチェックする",e:"water",s:2},{t:"共通の友達から情報収集する",e:"earth",s:1},{t:"自分から話しかけにいく",e:"fire",s:3},{t:"相手から来てくれるのを待つ",e:"air",s:0}]},
  {q:"好きな人からのLINE、どう返す？",opts:[{t:"即既読・即返信。我慢できない",e:"fire",s:3},{t:"あえて少し時間を置いてから返す",e:"air",s:1},{t:"何度も文章を書き直して送る",e:"water",s:2},{t:"相手のテンションに合わせて返す",e:"earth",s:2}]},
  {q:"デートで一番ときめく瞬間は？",opts:[{t:"ふとした時に名前を呼ばれた時",e:"water",s:2},{t:"さりげなくエスコートしてくれた時",e:"earth",s:2},{t:"二人で大笑いして盛り上がった時",e:"fire",s:2},{t:"沈黙が気まずくなく心地いいと感じた時",e:"air",s:2}]},
  {q:"好きな人ができた時、どっちタイプ？",opts:[{t:"一目惚れ派。直感で「この人だ」ってなる",e:"fire",s:3},{t:"じわじわ好きになる。気づいたら好きだった系",e:"water",s:1},{t:"相手の気持ちが気になりすぎて動けない",e:"water",s:0},{t:"好きになったら猪突猛進。冷静じゃいられない",e:"fire",s:2}]},
  {q:"ケンカした時、あなたはどうなりがち？",opts:[{t:"感情が爆発して、その場で言い返す",e:"fire",s:3},{t:"黙り込んで距離を置く",e:"air",s:1},{t:"泣いてしまう・引きずって考え込む",e:"water",s:1},{t:"原因を整理して解決策を話し合おうとする",e:"earth",s:2}]},
  {q:"「重い」と言われたこと、ある？",opts:[{t:"ある。好きになるとどっぷりハマるタイプ",e:"water",s:3},{t:"ない。むしろクールと言われがち",e:"air",s:0},{t:"情熱的だけど重いとは言われない",e:"fire",s:2},{t:"尽くすけど自分のペースは崩さない",e:"earth",s:1}]},
  {q:"元カレ/元カノのことを思い出すのはいつ？",opts:[{t:"ふとした瞬間に今でもよく思い出す",e:"water",s:2},{t:"正直あまり思い出さない。次を見てる",e:"fire",s:1},{t:"思い出すけど過去として割り切ってる",e:"air",s:1},{t:"学んだことを次に活かそうと振り返る",e:"earth",s:2}]},
  {q:"理想の恋愛のかたちは？",opts:[{t:"毎日連絡を取り合う一心同体な関係",e:"water",s:3},{t:"お互いを高め合える刺激的な関係",e:"fire",s:2},{t:"適度な距離感がある自立した関係",e:"air",s:1},{t:"安心して将来を任せられる堅実な関係",e:"earth",s:2}]},
  {q:"あなたが恋愛で一番怖いのは？",opts:[{t:"好きな人に嫌われること・捨てられること",e:"water",s:2},{t:"刺激のない退屈な関係になること",e:"fire",s:2},{t:"自由を縛られること・束縛されること",e:"air",s:2},{t:"信頼が裏切られること・騙されること",e:"earth",s:2}]},
  {q:"恋のスイッチが入るのはどんな時？",opts:[{t:"ギャップを見せられた時（普段と違う一面）",e:"fire",s:2},{t:"自分だけに優しくしてくれた時",e:"water",s:2},{t:"尊敬できる・頼れると思った時",e:"earth",s:2},{t:"ミステリアスでもっと知りたいと思った時",e:"air",s:2}]},
];

function calcType(ans){
  const score={fire:0,water:0,earth:0,air:0};
  const active={fire:0,water:0,earth:0,air:0};
  ans.forEach(({e,s})=>{score[e]=(score[e]||0)+1;active[e]=(active[e]||0)+s;});
  const top=Object.entries(score).sort((a,b)=>b[1]-a[1])[0][0];
  const ratio=active[top]/((score[top]||1)*3);
  const tier=ratio>0.65?"high":ratio>0.35?"mid":"low";
  return`${top}_${tier}`;
}

// ════════════════════════════════════════════════════════
// MAIN APP
// ════════════════════════════════════════════════════════
export default function App(){
  const [phase,setPhase]=useState("intro");
  const [gender,setGender]=useState(null);
  const [qi,setQi]=useState(0);
  const [answers,setAnswers]=useState([]);
  const [sel,setSel]=useState(-1);
  const [typeKey,setTypeKey]=useState(null);
  const [partnerKey,setPartnerKey]=useState(null);
  const [aMsg,setAMsg]=useState(0);
  const [fade,setFade]=useState(true);
  const [hearts,setHearts]=useState([]);
  const [copied,setCopied]=useState(false);
  const [showCompat,setShowCompat]=useState(false);
  const [partnerInput,setPartnerInput]=useState("");
  const [imgDataUrl,setImgDataUrl]=useState(null);
  const [savingImg,setSavingImg]=useState(false);
  const cardRef=useRef(null);

  useEffect(()=>{setHearts(Array.from({length:18},(_,i)=>({id:i,x:Math.random()*100,sz:Math.random()*16+8,delay:Math.random()*12,dur:Math.random()*8+10,op:Math.random()*0.13+0.04})));},[]);

  const AMSGS=["あなたの回答を解析中…","エレメントバランスを計算中…","12タイプから照合中…","あなたの恋愛タイプが判明！💘"];
  useEffect(()=>{
    if(phase!=="analyzing")return;
    let i=0;
    const t=setInterval(()=>{i++;setAMsg(i);if(i>=AMSGS.length){clearInterval(t);setTimeout(()=>{setTypeKey(calcType(answers));go("result");},700);}},900);
    return()=>clearInterval(t);
  },[phase]);

  const go=(p)=>{setFade(false);setTimeout(()=>{setPhase(p);setFade(true);window.scrollTo(0,0);},280);};
  const selectGender=(g)=>{setGender(g);go("quiz");};
  const answer=(e,s,idx)=>{
    if(sel!==-1)return;setSel(idx);
    setTimeout(()=>{
      const next=[...answers,{e,s}];setAnswers(next);setSel(-1);
      if(qi+1>=QUESTIONS.length){setFade(false);setTimeout(()=>{setPhase("analyzing");setFade(true);window.scrollTo(0,0);},280);}
      else{setFade(false);setTimeout(()=>{setQi(p=>p+1);setFade(true);},280);}
    },420);
  };
  const reset=()=>{setQi(0);setAnswers([]);setSel(-1);setTypeKey(null);setPartnerKey(null);setAMsg(0);setShowCompat(false);setPartnerInput("");setGender(null);go("intro");};

  const TYPES=gender==="male"?MALE_TYPES:FEMALE_TYPES;
  const T=typeKey?TYPES[typeKey]:null;
  const compat=typeKey&&partnerKey?getCompat(typeKey,partnerKey):null;
  const PARTNER_TYPES=gender==="male"?FEMALE_TYPES:MALE_TYPES;

  const tc=T?.c||"#e85a9a",ta=T?.a||"#ffa0c8";
  const bg=`radial-gradient(ellipse at 25% 15%,${tc}28 0%,transparent 55%),radial-gradient(ellipse at 80% 85%,${ta}18 0%,transparent 55%),linear-gradient(160deg,${T?.b1||"#1a0612"} 0%,${T?.b2||"#100410"} 100%)`;

  // アプリURL（Vercelデプロイ後にここを変更）
const APP_URL = "https://love-diagnosis-kohl.vercel.app";

  const shareText=T?`私の恋愛タイプは「${T.name}」${T.emoji}でした！\n「${gender==="female"?"彼はどのタイプかな？":"彼女はどのタイプかな？"}」\nぜひふたりで診断してみて💕\n\n${APP_URL}\n\n#恋愛診断 #カップル診断 #ラブタイプ診断`:"";

  const saveImage = () => {
    if (savingImg) return;
    setSavingImg(true);
    try {
      const canvas = document.createElement("canvas");
      const W = 600, H = 720;
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext("2d");

      // 背景
      ctx.fillStyle = T.b1 || "#1a0612";
      ctx.fillRect(0, 0, W, H);

      // グラデーションオーバーレイ
      const g = ctx.createRadialGradient(150, 100, 0, 150, 100, 400);
      g.addColorStop(0, (T.c || "#e85a9a") + "50");
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // ボーダー風の枠
      ctx.strokeStyle = (T.a || "#ffa0c8") + "60";
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 20, W - 40, H - 40);

      // ハート装飾
      ctx.font = "28px serif";
      ctx.globalAlpha = 0.25;
      ctx.fillStyle = "#fff";
      ["💕","💗","💘","🤍","💕","💗"].forEach((h, i) => {
        ctx.fillText(h, 30 + i * 90, 55);
      });
      ctx.globalAlpha = 1;

      // タイトル
      ctx.fillStyle = T.a || "#ffa0c8";
      ctx.font = "bold 22px Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("💕 ガチ恋愛タイプ診断", W / 2, 80);

      // サブタイトル
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.font = "16px Arial, sans-serif";
      ctx.fillText(
        gender === "female" ? "あなた（女性）の恋愛タイプ" : "あなた（男性）の恋愛タイプ",
        W / 2, 115
      );

      // キャラ絵文字（超大きく）
      ctx.font = "150px serif";
      ctx.fillText(T.emoji || "💕", W / 2, 300);

      // タイプ名
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 52px Arial, sans-serif";
      ctx.fillText(T.name, W / 2, 370);

      // キャッチコピー
      ctx.fillStyle = T.a || "#ffa0c8";
      ctx.font = "italic 20px Arial, sans-serif";
      const sub = "「" + T.love.slice(0, 22) + "…」";
      ctx.fillText(sub, W / 2, 415);

      // エレメント
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.fillRect(W/2 - 110, 432, 220, 36);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 16px Arial, sans-serif";
      ctx.fillText(T.el, W / 2, 455);

      // 区切り線
      ctx.strokeStyle = (T.a || "#ffa0c8") + "50";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(60, 490);
      ctx.lineTo(W - 60, 490);
      ctx.stroke();

      // 相性表示
      if (partnerKey && compat && PARTNER_TYPES[partnerKey]) {
        const pt = PARTNER_TYPES[partnerKey];
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.font = "bold 18px Arial, sans-serif";
        ctx.fillText(
          `💞 相性 ${pt.emoji} ${pt.name} → ${compat.pct}%`,
          W / 2, 530
        );
        ctx.fillStyle = "rgba(255,255,255,0.65)";
        ctx.font = "14px Arial, sans-serif";
        const msg = compat.msg.slice(0, 30) + "…";
        ctx.fillText(msg, W / 2, 560);
      }

      // URL
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      ctx.font = "14px Arial, sans-serif";
      ctx.fillText(APP_URL, W / 2, 625);

      // クレジット
      ctx.fillStyle = "rgba(255,255,255,0.22)";
      ctx.font = "12px Arial, sans-serif";
      ctx.fillText("ガチ恋愛タイプ診断 / 男女各12タイプ・相性診断つき", W / 2, 660);

      // 下部ハート
      ctx.font = "20px serif";
      ctx.globalAlpha = 0.2;
      ["💕","💗","💘","🤍","💕","💗"].forEach((h, i) => {
        ctx.fillText(h, 30 + i * 90, H - 20);
      });
      ctx.globalAlpha = 1;

      // dataURLをstateに保存→アプリ内モーダルで表示
      const dataUrl = canvas.toDataURL("image/png");
      setImgDataUrl(dataUrl);

    } catch (e) {
      alert("保存できませんでした。スクリーンショットをお試しください。");
    } finally {
      setSavingImg(false);
    }
  };

  return(
    <div style={{minHeight:"100vh",background:bg,fontFamily:"'Zen Maru Gothic',sans-serif",color:"#fff",position:"relative",overflowX:"hidden",transition:"background 1.2s ease"}}>
      <style>{CSS}</style>

      {/* 画像モーダル */}
      {imgDataUrl && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.92)",zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px"}}>
          <p style={{color:"rgba(255,255,255,0.8)",fontSize:14,fontWeight:700,marginBottom:14,textAlign:"center"}}>
            💕 診断結果画像
          </p>
          <img
            src={imgDataUrl}
            alt="診断結果"
            style={{
              width:"100%",
              maxWidth:320,
              borderRadius:16,
              boxShadow:"0 8px 40px rgba(0,0,0,0.8)",
              marginBottom:16,
              display:"block",
            }}
          />
          <div style={{background:"rgba(255,255,255,0.08)",borderRadius:14,padding:"14px 18px",maxWidth:320,width:"100%",fontSize:12,lineHeight:2,color:"rgba(255,255,255,0.7)",textAlign:"center",marginBottom:16}}>
            <b style={{color:"#fff",fontSize:13}}>📱 保存方法</b><br/>
            iPhone：画像を長押し →「写真に追加」<br/>
            Android：画像を長押し →「画像を保存」<br/>
            保存したらXに投稿してね💕
          </div>
          <button
            onClick={()=>setImgDataUrl(null)}
            style={{padding:"12px 32px",background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:50,color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}
          >
            ✕ 閉じる
          </button>
        </div>
      )}
      <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:0,overflow:"hidden"}}>
        {hearts.map(h=><div key={h.id} style={{position:"absolute",left:`${h.x}%`,bottom:"-30px",fontSize:h.sz,opacity:h.op,animation:`floatHeart ${h.dur}s ${h.delay}s infinite linear`}}>{["💕","💗","🤍","💘","♡"][h.id%5]}</div>)}
      </div>

      <div style={{position:"relative",zIndex:1,maxWidth:480,margin:"0 auto",padding:"0 18px 70px",opacity:fade?1:0,transform:fade?"translateY(0)":"translateY(14px)",transition:"opacity 0.28s ease,transform 0.28s ease"}}>

        {/* ── INTRO ── */}
        {phase==="intro"&&(
          <div style={{paddingTop:52,animation:"fadeUp 0.7s ease both"}}>
            <div style={{textAlign:"center",marginBottom:32}}>
              <div style={{display:"inline-block",padding:"5px 18px",borderRadius:30,background:"rgba(255,255,255,0.12)",backdropFilter:"blur(10px)",fontSize:11,letterSpacing:"0.1em",marginBottom:20,border:"1px solid rgba(255,255,255,0.2)"}}>💘 累計診断数 128万人突破</div>
              <div style={{fontSize:64,marginBottom:4,display:"inline-block",animation:"wiggle 3s ease-in-out infinite"}}>💕</div>
              <h1 style={{fontSize:32,fontWeight:900,lineHeight:1.25,margin:"8px 0 12px",textShadow:"0 2px 20px rgba(232,90,154,0.6)"}}>ガチ恋愛<br/>タイプ診断</h1>
              <p style={{fontSize:14,lineHeight:1.9,color:"rgba(255,255,255,0.85)",margin:"0 0 4px"}}>西洋占星術 × 心理学で導く<br/><b style={{color:"#ffb0d0"}}>本当の恋愛タイプ</b>がわかる！</p>
              <p style={{fontSize:12,color:"rgba(255,255,255,0.5)",margin:0}}>男女それぞれ12タイプ・ふたりの相性診断つき👫</p>
            </div>
            <div style={{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(16px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:24,padding:"22px 20px",marginBottom:24}}>
              {[{i:"💖",t:"あなたの恋愛キャラ（男女各12タイプ）"},{i:"💔",t:"気づいてない恋愛の弱点"},{i:"👫",t:"ふたりの相性スコアがわかる！"},{i:"📊",t:"カップルで比べて盛り上がれる"}].map((x,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:14,padding:"10px 0",borderBottom:i<3?"1px solid rgba(255,255,255,0.08)":"none"}}>
                  <span style={{fontSize:22}}>{x.i}</span><span style={{fontSize:14,fontWeight:500}}>{x.t}</span>
                </div>
              ))}
            </div>
            <button className="start-btn" onClick={()=>go("gender")} style={{width:"100%",padding:"20px",background:"linear-gradient(135deg,#e85a9a,#ff8ac8)",border:"none",borderRadius:50,color:"#fff",fontSize:17,fontWeight:900,letterSpacing:"0.08em",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 10px 30px rgba(232,90,154,0.5)",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}>
              無料で診断スタート 💌
            </button>
            <p style={{textAlign:"center",fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:14}}>全10問・約1分 / 登録不要</p>
          </div>
        )}

        {/* ── GENDER ── */}
        {phase==="gender"&&(
          <div style={{paddingTop:60,animation:"fadeUp 0.6s ease both"}}>
            <div style={{textAlign:"center",marginBottom:40}}>
              <div style={{fontSize:48,marginBottom:16}}>👫</div>
              <h2 style={{fontSize:22,fontWeight:900,margin:"0 0 10px"}}>あなたの性別は？</h2>
              <p style={{fontSize:14,color:"rgba(255,255,255,0.7)",margin:0}}>男女それぞれ専用の12タイプで診断します</p>
            </div>
            <div style={{display:"flex",gap:16}}>
              {[
                {g:"female",emoji:"👩",label:"女性",color:"#e85a9a",bg:"rgba(232,90,154,0.2)"},
                {g:"male",emoji:"👨",label:"男性",color:"#5a90e8",bg:"rgba(90,144,232,0.2)"},
              ].map(({g,emoji,label,color,bg:btnBg})=>(
                <button key={g} className="gender-btn" onClick={()=>selectGender(g)} style={{flex:1,padding:"32px 16px",background:btnBg,border:`2px solid ${color}60`,borderRadius:24,color:"#fff",cursor:"pointer",fontFamily:"inherit",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",animation:"genderPop 0.5s ease both",backdropFilter:"blur(10px)"}}>
                  <div style={{fontSize:56,marginBottom:12}}>{emoji}</div>
                  <div style={{fontSize:18,fontWeight:900,color}}>{label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── QUIZ ── */}
        {phase==="quiz"&&QUESTIONS[qi]&&(
          <div style={{paddingTop:40,animation:"fadeUp 0.5s ease both"}}>
            <div style={{marginBottom:28}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:10}}>
                <span style={{fontSize:12,color:"rgba(255,255,255,0.6)",fontWeight:500}}>Q{qi+1} <span style={{fontSize:10}}>/ {QUESTIONS.length}</span></span>
                <span style={{fontSize:12,color:"#ffb0d0",fontWeight:700}}>{Math.round((qi/QUESTIONS.length)*100)}% 完了</span>
              </div>
              <div style={{height:8,background:"rgba(255,255,255,0.1)",borderRadius:10,overflow:"hidden"}}>
                <div style={{height:"100%",borderRadius:10,background:"linear-gradient(90deg,#e85a9a,#ff8ac8)",width:`${((qi+1)/QUESTIONS.length)*100}%`,transition:"width 0.5s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:"0 0 12px rgba(232,90,154,0.7)"}}/>
              </div>
              <div style={{display:"flex",gap:4,marginTop:7}}>
                {QUESTIONS.map((_,i)=><div key={i} style={{flex:1,height:3,borderRadius:2,background:i<qi?"#e85a9a":i===qi?"rgba(232,90,154,0.5)":"rgba(255,255,255,0.08)",transition:"background 0.3s"}}/>)}
              </div>
            </div>
            <div style={{background:"rgba(255,255,255,0.1)",backdropFilter:"blur(16px)",border:"1px solid rgba(255,255,255,0.18)",borderRadius:22,padding:"26px 20px",marginBottom:20,textAlign:"center",animation:"pop 0.4s ease both"}}>
              <div style={{fontSize:28,marginBottom:10}}>💭</div>
              <p style={{fontSize:18,fontWeight:700,lineHeight:1.65,margin:0}}>{QUESTIONS[qi].q}</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:11}}>
              {QUESTIONS[qi].opts.map((opt,i)=>(
                <button key={i} className="opt" onClick={()=>answer(opt.e,opt.s,i)} style={{padding:"17px 18px",background:sel===i?"linear-gradient(135deg,#e85a9a,#ff8ac8)":"rgba(255,255,255,0.09)",border:`1.5px solid ${sel===i?"rgba(255,180,210,0.8)":"rgba(255,255,255,0.15)"}`,borderRadius:18,color:"#fff",fontSize:14,fontWeight:500,textAlign:"left",lineHeight:1.55,cursor:sel!==-1?"default":"pointer",fontFamily:"inherit",backdropFilter:"blur(10px)",transition:"all 0.25s cubic-bezier(0.34,1.56,0.64,1)",animation:`fadeUp 0.4s ${i*0.07}s both ease`,boxShadow:sel===i?"0 8px 24px rgba(232,90,154,0.5)":"none"}}>
                  {opt.t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── ANALYZING ── */}
        {phase==="analyzing"&&(
          <div style={{paddingTop:130,textAlign:"center",animation:"fadeUp 0.5s ease"}}>
            <div style={{position:"relative",display:"inline-block",marginBottom:36}}>
              <div style={{width:90,height:90,borderRadius:"50%",border:"3px solid rgba(255,255,255,0.12)",borderTopColor:"#ff9ac8",animation:"spin 1s linear infinite"}}/>
              <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,animation:"pulse 1.2s infinite"}}>💘</div>
            </div>
            <div style={{minHeight:60}}>
              {AMSGS.map((m,i)=>i===aMsg-1&&<p key={i} style={{fontSize:16,fontWeight:700,animation:"fadeUp 0.4s ease",letterSpacing:"0.03em"}}>{m}</p>)}
            </div>
            <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:20}}>
              {AMSGS.map((_,i)=><div key={i} style={{width:8,height:8,borderRadius:"50%",background:i<aMsg?"#ff9ac8":"rgba(255,255,255,0.2)",transition:"background 0.3s"}}/>)}
            </div>
          </div>
        )}

        {/* ── RESULT ── */}
        {phase==="result"&&T&&(()=>{
          const{Char}=T;
          return(
            <div style={{paddingTop:36}}>
              {/* hero - 画像保存対象カード */}
              <div ref={cardRef} style={{background:`linear-gradient(160deg,${T.c}40,rgba(255,255,255,0.08))`,border:`1.5px solid ${T.a}55`,borderRadius:28,padding:"26px 20px 22px",textAlign:"center",marginBottom:16,backdropFilter:"blur(16px)",boxShadow:`0 12px 50px ${T.c}30`,animation:"pop 0.7s ease both"}}>
                <div style={{fontSize:10,color:T.a,letterSpacing:"0.15em",fontWeight:700,marginBottom:4}}>💕 ガチ恋愛タイプ診断</div>
                <div style={{fontSize:12,color:T.a,letterSpacing:"0.1em",fontWeight:700,marginBottom:6}}>{gender==="female"?"あなた（女性）の恋愛タイプは…":"あなた（男性）の恋愛タイプは…"}</div>
                <div style={{animation:"charPop 0.8s cubic-bezier(0.34,1.56,0.64,1) both",display:"flex",justifyContent:"center"}}>
                  <Char s={170}/>
                </div>
                <h2 style={{fontSize:28,fontWeight:900,margin:"6px 0 8px",background:`linear-gradient(90deg,#fff,${T.a},#fff)`,backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"shimmer 4s linear infinite"}}>
                  {T.emoji} {T.name}
                </h2>
                <p style={{fontSize:14,fontWeight:500,color:"rgba(255,255,255,0.9)",margin:"0 0 10px",fontStyle:"italic"}}>「{T.love.slice(0,30)}…」</p>
                <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap",marginBottom:10}}>
                  <span style={{padding:"5px 14px",background:"rgba(255,255,255,0.15)",borderRadius:20,fontSize:11,fontWeight:600}}>{T.el}</span>
                </div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.4)",marginTop:4}}>{APP_URL}</div>
              </div>

              {/* 詳細 */}
              <RBlock title="💖 あなたの恋愛傾向" a={T.a}>{T.love}</RBlock>
              <RBlock title="💔 気づいてない恋の弱点" a={T.a}>{T.weak}</RBlock>

              {/* 相性診断セクション */}
              <div style={{background:"linear-gradient(135deg,rgba(255,180,60,0.15),rgba(255,100,150,0.1))",border:"1.5px solid rgba(255,200,100,0.4)",borderRadius:24,padding:"24px 20px",marginBottom:16,backdropFilter:"blur(14px)"}}>
                <p style={{fontSize:15,fontWeight:900,margin:"0 0 6px",textAlign:"center"}}>👫 ふたりの相性を診断する</p>
                <p style={{fontSize:12,color:"rgba(255,255,255,0.7)",textAlign:"center",margin:"0 0 18px"}}>
                  {gender==="female"?"彼のタイプを選ぶと相性スコアがわかります！":"彼女のタイプを選ぶと相性スコアがわかります！"}
                </p>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:14}}>
                  {Object.entries(PARTNER_TYPES).map(([key,pt])=>(
                    <button key={key} onClick={()=>setPartnerKey(key)} style={{padding:"10px 6px",background:partnerKey===key?`linear-gradient(135deg,${pt.c},${pt.a})`:"rgba(255,255,255,0.08)",border:`1.5px solid ${partnerKey===key?pt.a:"rgba(255,255,255,0.15)"}`,borderRadius:14,color:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:12,fontWeight:700,transition:"all 0.2s",textAlign:"center",backdropFilter:"blur(8px)"}}>
                      <div style={{fontSize:20,marginBottom:2}}>{pt.emoji}</div>
                      <div style={{fontSize:10,lineHeight:1.3}}>{pt.name}</div>
                    </button>
                  ))}
                </div>
                {partnerKey&&compat&&(
                  <div style={{background:"rgba(0,0,0,0.25)",borderRadius:16,padding:"18px",animation:"fadeUp 0.4s ease"}}>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:13,fontWeight:700,marginBottom:8}}>
                      <span>💞 相性スコア</span>
                      <span style={{color:compat.pct>=90?"#ff9ac8":compat.pct>=80?"#ffcc80":"#a0c8ff"}}>{compat.pct}%</span>
                    </div>
                    <div style={{height:10,background:"rgba(255,255,255,0.1)",borderRadius:10,overflow:"hidden",marginBottom:12}}>
                      <div style={{height:"100%",width:`${compat.pct}%`,background:compat.pct>=90?"linear-gradient(90deg,#e85a9a,#ff8ac8)":compat.pct>=80?"linear-gradient(90deg,#e8a030,#f0c060)":"linear-gradient(90deg,#5080e0,#80a8f0)",borderRadius:10,animation:"fillBar 1s ease both",boxShadow:"0 0 10px rgba(232,90,154,0.5)"}}/>
                    </div>
                    <div style={{display:"flex",alignItems:"flex-start",gap:8}}>
                      <div style={{flexShrink:0}}>
                        {(()=>{const PC=PARTNER_TYPES[partnerKey]?.Char;return PC?<PC s={60}/>:null;})()}
                      </div>
                      <p style={{fontSize:13,lineHeight:1.8,color:"rgba(255,255,255,0.9)",margin:0}}>{compat.msg}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* AFFILIATE */}
              <div style={{background:"linear-gradient(135deg,rgba(255,90,140,0.18),rgba(255,140,80,0.12))",border:"1.5px solid rgba(255,140,160,0.4)",borderRadius:24,padding:"24px 20px",marginBottom:16,textAlign:"center",backdropFilter:"blur(14px)"}}>
                <div style={{fontSize:30,marginBottom:8}}>🔮</div>
                <h3 style={{fontSize:16,fontWeight:900,margin:"0 0 10px",lineHeight:1.5}}>ふたりの相性、もっと詳しく知りたい？</h3>
                <p style={{fontSize:13,lineHeight:1.9,color:"rgba(255,255,255,0.8)",margin:"0 0 18px"}}>診断はあくまで傾向まで。<br/>プロの占い師に視てもらうと<br/><b style={{color:T.a}}>本当の縁と未来</b>がわかります。<br/><span style={{fontSize:11,color:"rgba(255,255,255,0.55)"}}>※今だけ初回無料で相談できます</span></p>
                <a href="https://px.a8.net/svt/ejp?a8mat=4B1DXO+ASS4CI+2PEO+C4LLD" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{display:"block",padding:"17px",background:"linear-gradient(135deg,#ff5a8c,#ff7a5a)",borderRadius:50,color:"#fff",fontSize:15,fontWeight:900,textDecoration:"none",letterSpacing:"0.05em",marginBottom:10,boxShadow:"0 8px 28px rgba(255,90,140,0.5)",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"}}>
                  💌 初回無料で運命を占ってもらう
                </a>
                <a href="https://px.a8.net/svt/ejp?a8mat=4B1DXO+ASS4CI+2PEO+C4LLD" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{display:"block",padding:"14px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.25)",borderRadius:50,color:"#fff",fontSize:14,fontWeight:700,textDecoration:"none",transition:"all 0.3s"}}>
                  💬 チャットで気軽に相談する
                </a>
              </div>

              {/* SHARE */}
              <div style={{background:"rgba(255,255,255,0.08)",borderRadius:22,padding:"20px",marginBottom:14,backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.12)"}}>
                <p style={{fontSize:14,fontWeight:700,textAlign:"center",margin:"0 0 4px"}}>📲 {gender==="female"?"彼にも診断させてみよう！":"彼女にも診断させてみよう！"}</p>
                <p style={{fontSize:11,color:"rgba(255,255,255,0.5)",textAlign:"center",margin:"0 0 14px"}}>ふたりの相性を確かめてみて👫</p>

                {/* 画像保存ボタン */}
                <button onClick={saveImage} disabled={savingImg} className="cta-btn" style={{width:"100%",padding:"14px",background:savingImg?"rgba(255,255,255,0.08)":"linear-gradient(135deg,#7a5af8,#e85a9a)",borderRadius:50,color:"#fff",fontSize:14,fontWeight:700,border:"none",cursor:savingImg?"not-allowed":"pointer",fontFamily:"inherit",marginBottom:6,transition:"all 0.3s",boxShadow:savingImg?"none":"0 6px 20px rgba(122,90,248,0.4)"}}>
                  {savingImg?"⏳ 生成中…":"🖼️ 結果画像を表示する"}
                </button>
                <p style={{fontSize:10,color:"rgba(255,255,255,0.35)",textAlign:"center",margin:"0 0 12px"}}>📱 表示された画像を長押し→「写真に保存」でXに投稿！</p>

                <button onClick={()=>{window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(shareText),"_blank");}} className="cta-btn" style={{width:"100%",padding:"14px",background:"#000",borderRadius:50,color:"#fff",fontSize:14,fontWeight:700,border:"1px solid rgba(255,255,255,0.2)",cursor:"pointer",fontFamily:"inherit",marginBottom:10,transition:"all 0.3s"}}>
                  𝕏 テキストでシェアする
                </button>
                <button onClick={()=>{navigator.clipboard.writeText(shareText);setCopied(true);setTimeout(()=>setCopied(false),2000);}} style={{width:"100%",padding:"12px",background:copied?"rgba(100,200,120,0.25)":"rgba(255,255,255,0.08)",borderRadius:50,color:copied?"#8fe0a0":"rgba(255,255,255,0.8)",fontSize:13,fontWeight:600,border:"1px solid rgba(255,255,255,0.15)",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}>
                  {copied?"✓ コピーしました！":"📋 テキストをコピー"}
                </button>
              </div>

              <button onClick={reset} style={{width:"100%",padding:"14px",background:"transparent",border:"1px solid rgba(255,255,255,0.2)",borderRadius:50,color:"rgba(255,255,255,0.55)",fontSize:13,fontWeight:500,cursor:"pointer",fontFamily:"inherit"}}>
                🔄 もう一度診断する
              </button>
              <p style={{textAlign:"center",fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:24,lineHeight:1.7}}>ガチ恋愛タイプ診断<br/>男女各12タイプ・相性診断つき</p>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

function RBlock({title,a,children}){
  return(
    <div style={{background:"rgba(255,255,255,0.07)",borderRadius:22,padding:"22px 20px",marginBottom:16,backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.12)",animation:"fadeUp 0.6s ease both"}}>
      <p style={{fontSize:14,fontWeight:700,color:a,margin:"0 0 12px",letterSpacing:"0.05em"}}>{title}</p>
      <div style={{fontSize:14,lineHeight:2,color:"rgba(255,255,255,0.92)"}}>{children}</div>
    </div>
  );
}
