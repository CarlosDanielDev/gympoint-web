import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '~/services/api';
import HeaderDefault from '~/components/HeaderDefault';
import Title from '~/components/Title';
import DefaultButton from '~/components/DefaultButton';
import FormDefault from '~/pages/_layouts/FormDefault';
import { Container, ContainerFooter } from './styles';

export default function StudentEdit() {
  const { student_id } = useParams();
  const [student, setStudent] = useState({});

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
  }, []);
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
            <Title>{student_id ? 'Editar Aluno' : 'Adiconar Aluno'}</Title>
            <div>
              <DefaultButton type="submit">Salvar</DefaultButton>
            </div>
          </HeaderDefault>

          <div id="form">
            <label htmlFor="name">Nome Completo</label>
            <Input id="name" name="name" />

            <label htmlFor="email">Endereço de Email</label>
            <Input id="email" name="email" />
            {!student_id && (
              <>
                <label htmlFor="password">Senha</label>
                <Input id="password" type="password" name="password" />
              </>
            )}
            <ContainerFooter>
              <div>
                <label htmlFor="age">Idade</label>
                <Input id="age" name="age" />
              </div>
              <div>
                <label htmlFor="weight">Peso</label>
                <Input id="weight" name="weight" />
              </div>
              <div>
                <label htmlFor="height">Altura</label>
                <Input id="height" name="height" />
              </div>
            </ContainerFooter>
          </div>
        </Form>
      </FormDefault>
    </Container>
  );
}
