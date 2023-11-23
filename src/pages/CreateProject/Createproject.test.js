import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Createproject } from './Createproject';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

jest.mock('../../components/ProjectContext', () => ({
  ...jest.requireActual('../../components/ProjectContext'),
  useProjectContext: () => ({
    saveProjectData: jest.fn(),
    getProjectData: jest.fn(),
  }),
}));

describe('CreateProject', () => {
  test('renders CreateProject component', () => {
    render(<Createproject />);
    expect(screen.getByText('Create Project')).toBeInTheDocument();
  });

  test('allows the user to enter project details', () => {
    render(<Createproject />);
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Project' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText('Project slug'), { target: { value: 'test-slug' } });
    fireEvent.change(screen.getByLabelText('Active Challenge'), { target: { value: 'test-challenge' } });

    expect(screen.getByLabelText('Title')).toHaveValue('Test Project');
    expect(screen.getByLabelText('Description')).toHaveValue('Test Description');
    expect(screen.getByLabelText('Project slug')).toHaveValue('test-slug');
    expect(screen.getByLabelText('Active Challenge')).toHaveValue('test-challenge');
  });

  test('uploads an image when selected from the file system', () => {
    render(<Createproject />);
    global.FileReader = jest.fn(() => ({
      readAsDataURL: jest.fn(),
      result: 'data:image/png;base64,exampleImageData',
    }));

    const input = screen.getByLabelText('Choose a project cover image');
    fireEvent.change(input, { target: { files: [new File([''], 'test-image.png', { type: 'image/png' })] } });

    expect(global.FileReader).toHaveBeenCalled();
    expect(screen.getByAltText('Uploaded')).toBeInTheDocument();
  });

});
