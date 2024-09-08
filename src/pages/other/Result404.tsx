import { Result } from 'antd';
import { Button, Container } from 'components/common';
import { useTranslation } from 'hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'routes';

const Result404: React.FC = () => {
  const t = useTranslation('result.404');
  const navigate = useNavigate();

  return (
    <Container styleConfig={{ centered: true }}>
      <Result
        status="404"
        title={t('title')}
        subTitle={t('subtitle')}
        extra={
          <Button type="primary" onClick={() => navigate(Routes.INDEX)}>
            {t('backHomeButton')}
          </Button>
        }
      />
    </Container>
  );
};

export default Result404;
