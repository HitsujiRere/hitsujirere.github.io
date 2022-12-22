import { Code } from '@/components/atoms/Code';
import { H2 } from '@/components/atoms/H2';
import { Section } from '@/components/templates/Section';

const profile = `
class HitsujiRere {
  constructor() {
    this.penName = 'ひつじ れれ';
    this.languages = {
      good: [ 'C', 'C++', 'C#', 'JavaScript', 'TypeScript', 'Python', ],
      haveUsed: [ ],
      learning: [ 'Rust', ],
    };
    this.frameworks = {
      good: [ 'Node.js', 'Processing', ],
      haveUsed: [ 'Unity', 'React (Next.js)', 'Vue.js (Nuxt.js)', ],
      learning: [ 'React (Next.js)', 'Vue.js (Nuxt.js)', ],
    };
    this.skills = {
      competitiveProgramming: {
        language: [ 'Rust', 'C++', ],
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
