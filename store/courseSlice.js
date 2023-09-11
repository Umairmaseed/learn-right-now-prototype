import { createSlice } from '@reduxjs/toolkit';

export const courseSlice = createSlice({
  name: 'course',
  initialState: {
    // activeCourseId: '1107a5a5-2471-42a1-b7fc-7d8c46113bdb',
    activeCourseId: '',
    activeCourseName: '',
    contentData: [],
    chapterData: [],
    contenType: '',
    quizQuestion: [],
    chapterid: '',
    quizMarks: '',
  },
  reducers: {
    setCourseId: (state, action) => {
      state.activeCourseId = action.payload;
    },
    setCourseName: (state, action) => {
      state.activeCourseName = action.payload;
    },
    setChapterId: (state, action) => {
      state.chapterid = action.payload;
    },
    setContentData: (state, action) => {
      state.contentData = action.payload;
    },
    setChapterData: (state, action) => {
      state.chapterData = action.payload;
    },
    setContentType: (state, action) => {
      state.contenType = action.payload;
    },
    setQuizQuestion: (state, action) => {
      state.quizQuestion = action.payload;
    },
    setQuizMarks: (state, action) => {
      state.quizMarks = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCourseId,
  setCourseName,
  setChapterId,
  setContentData,
  setContentType,
  setChapterData,
  setQuizQuestion,
  setQuizMarks,
} = courseSlice.actions;

export default courseSlice.reducer;
