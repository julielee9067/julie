export const translations = {
  ko: {
    name: "이은지",
    role: "소프트웨어 엔지니어",
    sections: {
      skills: "기술 스택",
      experience: "경력",
      education: "학력",
      projects: "프로젝트",
      blog: "블로그",
    },
    buttons: {
      viewAll: "모든 글 보기",
      viewProject: "프로젝트 보기",
      source: "소스 코드",
      downloadResume: "이력서 다운로드",
    },
    theme: {
      light: "라이트 모드",
      dark: "다크 모드",
      system: "시스템 설정",
    },
    gpa: "학점",
    period: "기간",
    current: "현재",
  },
  en: {
    name: "Julie Lee",
    role: "Software Engineer",
    sections: {
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      blog: "Blog",
    },
    buttons: {
      viewAll: "View All",
      viewProject: "View Project",
      source: "Source Code",
      downloadResume: "Download Resume",
    },
    theme: {
      light: "Light Mode",
      dark: "Dark Mode",
      system: "System",
    },
    gpa: "GPA",
    period: "Period",
    current: "Present",
  },
}

export type Language = keyof typeof translations

