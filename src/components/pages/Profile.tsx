import { Code } from '@/components/atoms/Code';
import { H2 } from '@/components/atoms/H2';
import { Section } from '@/components/templates/Section';

const calcAge = (birthdate: Date, today: Date) => {
  const birthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
  const age = today.getFullYear() - birthdate.getFullYear();
  if (today >= birthday) {
    return age;
  } else {
    return age - 1;
  }
};

const profile = `
class HitsujiRere {
  constructor() {
    this.penName = 'ひつじ れれ';
    this.birthday = new Date('3/31');
    this.languages = {
      good: [ 'C', 'C++', 'C#', 'JavaScript', 'TypeScript', 'Python', ],
      haveUsed: [ 'Java', ],
      learning: [ 'Rust', ],
    };
    this.frameworks = {
      good: [ 'Node.js', 'Processing', ],
      haveUsed: [ 'Unity', 'React (Next.js)', 'Vue.js (Nuxt.js)', ],
      learning: [ 'Unity', ],
    };
    this.skills = {
      competitiveProgramming: {
        language: [ 'C++', ],
        AtCoder: { user: 'Deji', highestRate: 1455 }
      }
    };
  }
}
`.trim();

export const Profile = () => {
  return (
    <Section id='profile'>
      <H2 title='PROFILE' />
      <div className='flex justify-center'>
        <Code language='javascript'>{profile}</Code>
      </div>
    </Section>
  );
};
