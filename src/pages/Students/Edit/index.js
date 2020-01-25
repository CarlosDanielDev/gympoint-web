import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack, IoIosCheckmark } from 'react-icons/io';
import api from '~/services/api';
import HeaderDefault from '~/components/HeaderDefault';
import Title from '~/components/Title';
import DefaultButton from '~/components/DefaultButton';
import FormDefault from '~/pages/_layouts/FormDefault';
import { Container, ContainerFooter } from './styles';

export default function StudentEdit() {
  const { student_id } = useParams();
  const [student, setStudent] = useState({});
  const [t] = useTranslation();

  async function getStudent(id) {
    if (!id) return;

    try {
      const response = await api.get(`/students/${id}`);

      setStudent(response.data);
    } catch (error) {
      toast.error('Id Incorreto');
    }
  }

  useEffect(() => {
    getStudent(student_id);
  }, [student_id]);

  async function update(data) {
    try {
      if (data) {
        const response = await api.put(`/students/${student_id}`, data);

        if (response.data) {
          toast.success('Student Updated Successfull');
        }
      }
    } catch (error) {
      toast.error('Falha ao atualizar aluno');
    }
  }

  async function create(data) {
    try {
      if (data) {
        const response = await api.post('/students', data);

        if (response.data) {
          toast.success('Student created!');
        }
      }
    } catch (error) {
      toast.error('Falha ao criar novo estudate');
    }
  }

  async function handleChoice(data) {
    if (student_id) {
      await update(data);
      return;
    }
    await create(data);
  }
  return (
    <Container>
      <FormDefault>
        <Form initialData={student} onSubmit={handleChoice}>
          <HeaderDefault>
            <Title>
              {student_id
                ? t('alunos.form.titleEdit')
                : t('alunos.form.titleAdd')}
            </Title>
            <div>
              <button id="back" type="button">
                <Link to="/students">{t('alunos.form.button2')}</Link>
              </button>

              <DefaultButton type="submit">
                {t('alunos.form.button1')}
              </DefaultButton>
            </div>
          </HeaderDefault>

          <div id="form">
            <label htmlFor="name">{t('alunos.form.body.1')}</label>
            <Input id="name" name="name" />

            <label htmlFor="email">{t('alunos.form.body.2')}</label>
            <Input id="email" name="email" />
            {!student_id && (
              <>
                <label htmlFor="password">{t('alunos.form.body.3')}</label>
                <Input id="password" type="password" name="password" />
              </>
            )}
            <ContainerFooter>
              <div>
                <label htmlFor="age">{t('alunos.form.body.4')}</label>
                <Input id="age" name="age" />
              </div>
              <div>
                <label htmlFor="weight">{t('alunos.form.body.5')}</label>
                <Input id="weight" name="weight" />
              </div>
              <div>
                <label htmlFor="height">{t('alunos.form.body.6')}</label>
                <Input id="height" name="height" />
              </div>
            </ContainerFooter>
          </div>
        </Form>
      </FormDefault>
    </Container>
  );
}
