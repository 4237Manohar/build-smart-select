
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Building2, Calendar, DollarSign, Users, Plus, MoreHorizontal } from 'lucide-react';

interface ProjectManagementProps {
  userRole: 'core' | 'admin';
}

export const ProjectManagement = ({ userRole }: ProjectManagementProps) => {
  const projects = [
    {
      id: 1,
      name: "Downtown Commercial Complex",
      type: "Commercial",
      status: "In Progress",
      progress: 65,
      budget: 2500000,
      spent: 1625000,
      startDate: "2024-01-15",
      endDate: "2024-08-30",
      materials: 45,
      team: 12
    },
    {
      id: 2,
      name: "Residential Tower A",
      type: "Residential",
      status: "Planning",
      progress: 25,
      budget: 1800000,
      spent: 450000,
      startDate: "2024-02-01",
      endDate: "2024-12-15",
      materials: 32,
      team: 8
    },
    {
      id: 3,
      name: "Industrial Warehouse",
      type: "Industrial",
      status: "Completed",
      progress: 100,
      budget: 950000,
      spent: 920000,
      startDate: "2023-09-01",
      endDate: "2024-01-30",
      materials: 28,
      team: 6
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-700';
      case 'Planning': return 'bg-yellow-100 text-yellow-700';
      case 'Completed': return 'bg-green-100 text-green-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return 'bg-green-600';
    if (progress >= 50) return 'bg-blue-600';
    return 'bg-orange-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Building2 className="h-5 w-5" />
                <span>Project Management</span>
              </CardTitle>
              <CardDescription>
                Monitor and manage your construction projects with AI-optimized material selections
              </CardDescription>
            </div>
            {userRole === 'admin' && (
              <Button className="bg-gradient-to-r from-blue-600 to-orange-500">
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-900">3</div>
              <div className="text-blue-700 text-sm">Active Projects</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-900">$5.25M</div>
              <div className="text-green-700 text-sm">Total Budget</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-900">105</div>
              <div className="text-orange-700 text-sm">Materials Tracked</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-900">26</div>
              <div className="text-purple-700 text-sm">Team Members</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{project.team} members</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Progress</span>
                  <span className="text-sm text-slate-600">{project.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-slate-600" />
                    <span className="text-sm text-slate-600">Budget</span>
                  </div>
                  <div className="mt-1">
                    <div className="text-lg font-semibold text-slate-900">
                      ${project.budget.toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-600">
                      Spent: ${project.spent.toLocaleString()} ({Math.round((project.spent / project.budget) * 100)}%)
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-4 w-4 text-slate-600" />
                    <span className="text-sm text-slate-600">Materials</span>
                  </div>
                  <div className="mt-1">
                    <div className="text-lg font-semibold text-slate-900">
                      {project.materials}
                    </div>
                    <div className="text-sm text-slate-600">
                      AI-optimized selections
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-slate-600" />
                    <span className="text-sm text-slate-600">Timeline</span>
                  </div>
                  <div className="mt-1">
                    <div className="text-lg font-semibold text-slate-900">
                      {Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                    </div>
                    <div className="text-sm text-slate-600">
                      Remaining
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-4">
                <Button size="sm" className="flex-1">
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  Materials List
                </Button>
                <Button size="sm" variant="outline">
                  Cost Analysis
                </Button>
                {userRole === 'admin' && (
                  <Button size="sm" variant="outline">
                    Edit Project
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
