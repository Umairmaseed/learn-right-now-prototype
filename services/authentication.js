import axios from 'axios';
import { API_URL } from '@/constant';

export default {
  async getUser() {
    const token1 = 'c3661740bb670851b9e94a9c5388272f0794dac7';
    // const token = localStorage.getItem("token") || "";
    try {
      const config = {
        headers: {
          Authorization: 'Token ' + token1,
          'Content-Type': 'Application/JSON',
        },
      };
      const response = await axios.get(API_URL + '/api/users/', config);
      return await response;
    } catch (e) {
      throw e;
    }
  },

  async getCourses() {
    const token1 = 'c3661740bb670851b9e94a9c5388272f0794dac7';
    try {
      const config = {
        headers: {
          Authorization: 'Token ' + token1,
          'Content-Type': 'Application/JSON',
        },
      };
      const response = await axios.get(API_URL + '/api/courses/', config);
      return await response;
    } catch (e) {
      // alert(e);
      throw e;
    }
  },

  async getEnrolledCourses() {
    const token1 = 'c3661740bb670851b9e94a9c5388272f0794dac7';
    try {
      const config = {
        headers: {
          Authorization: 'Token ' + token1,
          'Content-Type': 'Application/JSON',
        },
      };
      const response = await axios.get(
        API_URL + '/api/enrolled-courses/',
        config
      );
      return await response;
    } catch (e) {
      // alert(e);
      throw e;
    }
  },

  async getCourseChaptersContent(course_id) {
    const token1 = 'c3661740bb670851b9e94a9c5388272f0794dac7';
    localStorage.setItem('course_id', course_id);
    const config = {
      headers: {
        Authorization: 'Token ' + token1,
        'Content-Type': 'Application/JSON',
      },
    };
    try {
      const response = await axios.get(
        API_URL + '/api/chapters/?course_id=' + course_id,
        config
      );
      return await response;
    } catch (e) {
      // alert(e);
      throw e;
    }
  },

  async getFileContent(assignment_id) {
    const token1 = 'c3661740bb670851b9e94a9c5388272f0794dac7';
    const config = {
      headers: {
        Authorization: 'Token ' + token1,
        'Content-Type': 'Application/JSON',
      },
    };
    try {
      const response = axios.get(
        API_URL + '/api/file-content/' + assignment_id,
        config
      );
      //   alert(JSON.stringify(await response.data));
      //   return await response;
      // alert(JSON.stringify(response.data));
      // alert(response.data);
      return response;
    } catch (e) {
      // alert(e);
      throw e;
    }
  },

  async geQuizQuestionsWithOptions() {
    const token1 = 'c3661740bb670851b9e94a9c5388272f0794dac7';
    try {
      const config = {
        headers: {
          Authorization: 'Token ' + token1,
          'Content-Type': 'Application/JSON',
        },
      };
      const response = await axios.get(
        API_URL + '/api/quiz-questions/',
        config
      );
      return await response;
    } catch (e) {
      // alert(e);
      throw e;
    }
  },

  async getQuizData(id) {
    const token1 = 'c3661740bb670851b9e94a9c5388272f0794dac7';
    try {
      const config = {
        headers: {
          Authorization: 'Token ' + token1,
          'Content-Type': 'Application/JSON',
        },
      };
      const response = axios.get(API_URL + '/api/quiz/?id=' + id, config);
      return await response;
    } catch (e) {
      alert(e);
      throw e;
    }
  },

  async getAnnouncment(assignment_id) {
    const token = 'c3661740bb670851b9e94a9c5388272f0794dac7';
    try {
      const config = {
        headers: {
          Authorization: 'Token ' + token,
          'Content-Type': 'Application/JSON',
        },
      };
      const response = await axios.get(
        API_URL + '/api/announcements/?id=' + assignment_id,
        config
      );
      return await response;
    } catch (e) {
      // alert(e);
      throw e;
    }
  },

  async getVideos() {
    const token = 'c3661740bb670851b9e94a9c5388272f0794dac7';

    try {
      const config = {
        headers: {
          Authorization: 'JWT ' + token,
        },
      };
      let form_data = {};
      const response = await axios.post(
        API_URL + '/video_tutorials/',
        form_data,
        config
      );
      return await response;
    } catch (e) {
      // alert("in catch");
      throw e;
    }
  },

  async quizSubmit(quizId, answer) {
    const token = 'c3661740bb670851b9e94a9c5388272f0794dac7';

    const config = {
      headers: {
        Authorization: 'Token ' + token,
        'Content-Type': 'Application/JSON',
      },
    };
    let form_data = {
      quiz: quizId,
      selected_options: answer,
    };
    try {
      const response = await axios.post(
        API_URL + '/api/quiz-attempts/',
        form_data,
        config
      );
      return await response;
    } catch (e) {
      throw e;
    }
  },
  async getPage(pageName) {
    try {
      const response = await axios.get(
        API_URL + '/api/pages/?course_url=' + pageName
      );
      return await response;
    } catch (e) {
      // alert(e);
      throw e;
    }
  },
};
