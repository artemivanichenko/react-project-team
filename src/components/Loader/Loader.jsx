import { LoaderContainer, Container, Wave } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
    <LoaderContainer>
      <Wave
        height="300"
        width="500"
        color="#6e8b75"
        // bgc
        ariaLabel="line-wave"
        wrapperStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',

        }}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </LoaderContainer></Container>
  );
};
