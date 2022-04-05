import Code from './Code'

const profile = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`;

const Profile = () => {
  return (
    <div className='bg-gray-800'>
      <div className='mx-auto max-w-screen-xl'>
        <h1 className='text-2xl font-bold text-gray-100'>PROFILE</h1>
        <Code code={profile} language='javascript' />
      </div>
    </div>
  );
};

export default Profile;
