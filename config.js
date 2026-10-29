// =============================================================
//  부력 탐구실 설정 파일
//  ① SUPABASE_URL      : Supabase → Project Settings → API 의 Project URL
//  ② SUPABASE_ANON_KEY : anon public 키 (또는 sb_publishable_ 로 시작하는 키)
//     ※ service_role / secret 키는 절대 넣지 마세요!
//  ③ APPS_SCRIPT_URL   : 사진 저장용 Apps Script 웹 앱 주소 (https://script.google.com/macros/s/..../exec)
//  새 버전을 받으면 index.html만 바꾸고 이 파일은 그대로 두세요.
// =============================================================
window.BUOY_CONFIG = {
  SUPABASE_URL: "https://rbpofwlpfxnsicyoxkao.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJicG9md2xwZnhuc2ljeW94a2FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMTU4NzgsImV4cCI6MjEwNjg5MTg3OH0.gpVo5qIJ2PelW0TjWQEEKmVglVOH8oSVKe1SPiikkM0",
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxiNgbqlHcaIBxo3JNpaE-8ouCvKb2XqxRaw0BIkvWu7yxZZ1ViiZfz5HQlubeiaTot_g/exec",
  GRADE: 1,        // 학년
  CLASS_COUNT: 7,  // 반 수
  YEAR: 2026       // 저작권 표시 연도
};
