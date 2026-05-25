import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import projectsData from '../data/projectsData';

// Классовый компонент для управления состоянием
class Portfolio extends Component {
  constructor(props) {
    super(props);
    
    // Начальное состояние
    this.state = {
      selectedFilter: 'All',  // Активный фильтр по умолчанию
      projects: projectsData   // Полный список проектов
    };
  }

  // Получаем уникальные категории из проектов
  getUniqueCategories() {
    const categories = this.state.projects.map(project => project.category);
    // Добавляем "All" и убираем дубликаты
    return ['All', ...new Set(categories)];
  }

  // Фильтрация проектов по выбранной категории
  getFilteredProjects() {
    const { projects, selectedFilter } = this.state;
    
    if (selectedFilter === 'All') {
      return projects;
    }
    
    return projects.filter(project => project.category === selectedFilter);
  }

  // Обработчик изменения фильтра
  handleFilterChange = (filter) => {
    console.log(filter); // Для проверки работы
    this.setState({ selectedFilter: filter });
  }

  render() {
    const filters = this.getUniqueCategories();
    const filteredProjects = this.getFilteredProjects();
    
    return (
      <div className="portfolio">
        <h1 className="portfolio-title">Моё портфолио</h1>
        
        <Toolbar 
          filters={filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.handleFilterChange}
        />
        
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;