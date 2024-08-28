import { Schema } from 'mongoose';

const Layout = {
  header: {
    type: [[String]],
  },
  body: {
    type: [[String]],
  },
  footer: {
    type: [String],
  },
};

const Resume = {
  inputs: {
    type: [String],
  },
  layout: {
    type: Layout,
  },
  fontProfile: {
    type: String,
  },
  spacing: {
    type: Number,
  },
  color: {
    type: String,
  },
};

const userContact = {
  label: {
    type: String,
  },
  link: {
    type: String,
  },
  isHidden: {
    type: Boolean,
  },
  identifier: {
    type: String,
  },
};

const Contact = {
  fullName: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  userImage: {
    type: String,
  },
  contact: {
    type: [userContact],
  },
};

const Education = {
  _id: {
    type: String,
  },
  isHidden: {
    type: Boolean,
    requied: true,
  },
  institute: {
    type: String,
  },
  location: {
    type: String,
  },
  degree: {
    type: String,
  },
  stream: {
    type: String,
  },
  gradeObtained: {
    type: Number,
  },
  gradeMax: {
    type: Number,
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
    nullable: true,
  },
  description: {
    type: String,
  },
};

const Experience = {
  _id: {
    type: String,
  },
  isHidden: {
    type: Boolean,
  },
  jobTitle: {
    type: String,
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  tags: {
    type: [String],
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
    nullable: true,
  },
};

const Projects = {
  _id: {
    type: String,
  },
  isHidden: {
    type: Boolean,
  },
  projectName: {
    type: String,
  },
  additionalInfo: {
    type: String,
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
    nullable: true,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  tags: {
    type: [String],
  },
};

const Certifications = {
  _id: {
    type: String,
  },
  isHidden: {
    type: Boolean,
  },
  certificateName: {
    type: String,
  },
  authority: {
    type: String,
  },
  credentialNumber: {
    type: String,
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
    nullable: true,
  },
  link: {
    type: String,
  },
};

const Publications = {
  _id: {
    type: String,
  },
  isHidden: false,
  authorNames: {
    type: String,
  },
  journalName: {
    type: String,
  },
  articleTitle: {
    type: String,
  },
  volumeNumber: {
    type: String,
  },
  issueNumber: {
    type: String,
  },
  pages: {
    type: String,
  },
  year: {
    type: String,
  },
  format: {
    type: String,
  },
  doi: {
    type: String,
  },
};

const skillData = {
  _id: {
    type: String,
  },
  isHidden: {
    type: Boolean,
  },
  category: {
    type: String,
  },
  skillsList: {
    type: [String],
  },
};

const Skills = {
  format: {
    type: String,
  },
  data: {
    type: [skillData],
  },
};

const customSectionInput = {
  _id: {
    type: String,
  },
  type: {
    type: String,
  },
  name: {
    type: String,
  },
};

const customSectionData = {
  _id: {
    type: String,
  },
  isHidden: {
    type: Boolean,
  },
  values: {
    type: Object,
  },
};

const customSection = {
  _id: {
    type: String,
  },
  header: {
    type: String,
  },
  hasTitleRow: {
    type: Boolean,
  },
  inputs: {
    type: [customSectionInput],
  },
  data: {
    type: [customSectionData],
  },
  layout: {
    type: [[String]],
  },
};

export const ResumeSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    template: {
      type: Resume,
      required: true,
      trim: true,
      default: {
        inputs: [
          'EDUCATION',
          'EXPERIENCE',
          'PROJECTS',
          'CERTIFICATIONS',
          'PUBLICATIONS',
          'SKILLS',
        ],
        layout: {
          header: [['NAME_AND_JT', 'USER_IMAGE'], ['SOCIAL_HANDLES']],
          body: [
            ['EXPERIENCE', 'PROJECTS', 'EDUCATION'],
            ['SKILLS', 'CERTIFICATIONS', 'PUBLICATIONS'],
          ],
          footer: ['WATERMARK'],
        },
        fontProfile: 'CLASSIC',
        spacing: 1,
        color: 'blue',
      },
    },
    contact: {
      type: Contact,
      require: true,
      trim: true,
      default: {
        fullName: '',
        jobTitle: '',
        userImage: '',
        contact: [],
      },
    },
    education: {
      type: [Education],
      required: true,
      trim: true,
      default: [],
    },
    experience: {
      type: [Experience],
      required: true,
      trim: true,
      default: [],
    },
    projects: {
      type: [Projects],
      required: true,
      trim: true,
      default: [],
    },
    certifications: {
      type: [Certifications],
      required: true,
      trim: true,
      default: [],
    },
    publications: {
      type: [Publications],
      required: true,
      trim: true,
      default: [],
    },
    skills: {
      type: Skills,
      required: true,
      trim: true,
      default: {
        format: 'CATEGORIES',
        data: [],
      },
    },
    customSections: {
      type: [customSection],
      required: true,
      trim: true,
      default: [],
    },
  },
  { timestamps: true },
);
