import { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import projectsData from '../../data/projectsData';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All'
    };
  }

  // Получаем уникальные категории из всех проектов
  getUniqueCategories = () => {
    const categories = projectsData.map(project => project.category);
    const uniqueCategories = ['All', ...new Set(categories)];
    return uniqueCategories;
  }

  // Фильтруем проекты по выбранной категории
  getFilteredProjects = () => {
    if (this.state.selectedFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter(project => project.category === this.state.selectedFilter);
  }

  // Обработчик смены фильтра
  handleSelectFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  }

  render() {
    const filteredProjects = this.getFilteredProjects();
    const filters = this.getUniqueCategories();

    return (
      <div className="portfolio">
        <div className="portfolio-header">
          <h1>Portfolio</h1>
        </div>
        <Toolbar
          filters={filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;