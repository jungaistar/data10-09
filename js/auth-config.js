// 로그인 설정 — 이 파일 한 곳만 바꾸면 된다(생성: data10-00/scripts/apply-auth-kit.mjs, 대문 문구 출처 docs/plan.json).
// 내 Supabase 로 옮길 때: url · anonKey 를 내 프로젝트 값으로, 카카오를 설정하지 않았으면 kakao: false. 안내 = docs/내_깃허브로_옮기기.md
// prefix 는 supabase/auth.sql 의 표 이름 앞부분과 같아야 한다.
window.AUTH_CONFIG = {
  "url": "https://hcmgdztsgjvzcyxyayaj.supabase.co",
  "anonKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw",
  "prefix": "data1009",
  "kakao": true,
  "idleMinutes": 30,
  "localBypass": true,
  "site": {
    "title": "품질 업무 자료 도우미",
    "summary": "절차서 · 체크리스트 같은 업무 자료와 담당자의 설명 · 경험을 모아 업무 흐름도와 단계별 업무 방법서 초안을 만들고, 근거가 있는 부분과 확인이 필요한 부분을 나눠 보여 주는 도구입니다.",
    "course": "현장 데이터 디지털화 전문가과정 · 2차수",
    "features": [
      {
        "name": "자료 등록하기",
        "desc": "절차서 · 체크리스트 · 양식을 붙여 넣거나 txt · docx · xlsx 로 넣고 화면 캡처 · 사진도 함께 둡니다."
      },
      {
        "name": "담당자에게 질문하기",
        "desc": "기본 질문 13개와 AI 가 자료를 읽고 뽑은 질문에 답을 받습니다. 여러 번에 나눠 채워도 됩니다."
      },
      {
        "name": "AI 초안 작성",
        "desc": "자료와 답변으로 흐름도와 단계별 업무 방법서 초안을 만들고 단계마다 근거와 AI 추정을 표시합니다."
      },
      {
        "name": "문서로 내보내기",
        "desc": "Word 업무 방법서 · Excel 단계표 · 인수인계 체크리스트 · 1장 요약으로 받습니다."
      },
      {
        "name": "담당자 확인 · 판 기록",
        "desc": "단계마다 담당자가 확인하고 고치면 새 판으로 남깁니다. 바뀌지 않은 단계는 확인을 이어받습니다."
      },
      {
        "name": "신입 교육 자료 만들기",
        "desc": "④ 에서 보낸 초안 흐름으로 교육 한 장(목적 · 흐름도 · 핵심 포인트 · 자주 하는 실수 · 퀴즈 3)과 주차별 커리큘럼을 만듭니다."
      }
    ],
    "steps": [
      "절차서·체크리스트 넣기",
      "담당자에게 질문하기",
      "AI 초안 작성",
      "담당자 확인",
      "문서로 내보내기",
      "신입 교육 자료 만들기"
    ],
    "flow": [
      {
        "step": "절차서·체크리스트 넣기",
        "desc": "업무 하나를 고르고 자료 · 캡처 · 사진을 등록(번호 M1 · P1)"
      },
      {
        "step": "담당자에게 질문하기",
        "desc": "기본 질문 13개 + AI 가 뽑은 질문에 답, 말로 한 설명(Q · T)"
      },
      {
        "step": "AI 초안 작성",
        "desc": "자료 + 답변 프롬프트 → AI 답(JSON) 검사 → 흐름도 · 업무 방법서"
      },
      {
        "step": "담당자 확인",
        "desc": "근거 · AI 추정을 보고 단계마다 확인, 고치면 새 판"
      },
      {
        "step": "문서로 내보내기",
        "desc": "업무 방법서 · 단계표 · 인수인계 체크리스트 · 1장 요약"
      },
      {
        "step": "신입 교육 자료 만들기",
        "desc": "초안 흐름을 보내 교육 한 장 · 커리큘럼"
      }
    ],
    "goals": [
      "업무 하나를 골라 자료 → 담당자 질문 → AI 초안 → 담당자 확인 → 문서까지 한 바퀴를 돌립니다.",
      "초안의 단계마다 근거(문서 · 담당자 답변 · AI 추정)를 보이고 담당자가 확인한 단계에 표시합니다.",
      "결과를 Word 업무 방법서 · Excel 단계표 · 인수인계 체크리스트 · 1장 요약으로 냅니다."
    ],
    "screen": "docs/img/screen.png",
    "plan": "plan.html",
    "home": true,
    "landing": {
      "eyebrow": "품질보증팀 업무 자료 도우미",
      "headline": "담당자의 경험을\n업무 자료로 남깁니다",
      "lead": "절차서와 담당자 설명을 모아 업무 방법서 초안을 만들고 근거가 있는 부분과 확인이 필요한 부분을 나눠 보여 줍니다.",
      "theme": "light",
      "colors": {
        "bg": "#f7f1e9",
        "ink": "#24303f",
        "sub": "#5c534b",
        "navy": "#1f3550",
        "navy2": "#16273c",
        "accent": "#b0443c"
      },
      "company": {
        "name": "건화",
        "en": "KUNHWA",
        "team": "품질보증팀"
      }
    }
  }
};
