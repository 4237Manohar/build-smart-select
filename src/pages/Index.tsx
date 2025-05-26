
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Building2, Calculator, TrendingUp, Search, Filter, BarChart3, Users, Shield, Zap } from 'lucide-react';
import { LoginModal } from '@/components/auth/LoginModal';
import { DashboardView } from '@/components/dashboard/DashboardView';

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'core' | 'admin'>('core');

  if (isAuthenticated) {
    return <DashboardView userRole={userRole} onLogout={() => setIsAuthenticated(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                AI Material Selector
              </span>
            </div>
            <Button 
              onClick={() => setShowLogin(true)}
              className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            AI-Powered Construction Solutions
          </Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Optimal Construction Material Selection with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Advanced AI
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Leverage cutting-edge artificial intelligence to analyze, compare, and select the most suitable 
            construction materials for your projects. Optimize costs, performance, and sustainability with data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowLogin(true)}
              className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8"
            >
              <Brain className="mr-2 h-5 w-5" />
              Start AI Analysis
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
              <BarChart3 className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive AI Analysis Platform</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Advanced features designed for construction professionals and project managers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">AI Material Recommendations</CardTitle>
              <CardDescription>
                Advanced algorithms analyze project requirements and recommend optimal materials based on performance, cost, and sustainability metrics.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Cost Optimization</CardTitle>
              <CardDescription>
                Real-time cost analysis and optimization suggestions to maximize value while maintaining quality standards and project requirements.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Performance Analytics</CardTitle>
              <CardDescription>
                Comprehensive performance metrics including durability, environmental impact, and long-term maintenance predictions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Search className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Advanced Search & Filtering</CardTitle>
              <CardDescription>
                Powerful search capabilities with intelligent filtering by material properties, specifications, and project compatibility.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Project Management</CardTitle>
              <CardDescription>
                Integrated project management tools for tracking material selections, timelines, and budget allocations across multiple projects.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Role-Based Access Control</CardTitle>
              <CardDescription>
                Secure authentication system with Core User and Admin access levels, ensuring proper permissions and data security.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Authentication Levels */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Access Levels & Permissions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Secure, role-based system designed for different user types and responsibilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-900">Core User Access</CardTitle>
              </div>
              <CardDescription className="text-blue-700">
                Standard access for construction professionals and project managers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                  <span>AI material recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                  <span>Cost analysis and optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                  <span>Material comparison tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                  <span>Project dashboard access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                  <span>Performance analytics</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-600 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-xl text-orange-900">Admin User Access</CardTitle>
              </div>
              <CardDescription className="text-orange-700">
                Full administrative control with complete system management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-orange-800">
                <li className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 bg-orange-600 rounded-full"></div>
                  <span>All Core User permissions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 bg-orange-600 rounded-full"></div>
                  <span>Add new materials to database</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 bg-orange-600 rounded-full"></div>
                  <span>Update material specifications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 bg-orange-600 rounded-full"></div>
                  <span>Delete materials and projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 bg-orange-600 rounded-full"></div>
                  <span>User management and analytics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-600 to-orange-500 border-0 text-white">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Material Selection?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join construction professionals who are already using AI to make smarter, more cost-effective material decisions.
            </p>
            <Button 
              size="lg" 
              onClick={() => setShowLogin(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8"
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
          </CardContent>
        </Card>
      </section>

      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)}
        onLogin={(role) => {
          setIsAuthenticated(true);
          setUserRole(role);
          setShowLogin(false);
        }}
      />
    </div>
  );
};

export default Index;
