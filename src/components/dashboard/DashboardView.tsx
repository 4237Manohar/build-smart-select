
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, LogOut, Settings, Search, Plus, BarChart3, Building2, Calculator, TrendingUp, Shield, Users } from 'lucide-react';
import { MaterialRecommendations } from './MaterialRecommendations';
import { CostOptimization } from './CostOptimization';
import { MaterialDatabase } from './MaterialDatabase';
import { ProjectManagement } from './ProjectManagement';

interface DashboardViewProps {
  userRole: 'core' | 'admin';
  onLogout: () => void;
}

export const DashboardView = ({ userRole, onLogout }: DashboardViewProps) => {
  const [activeTab, setActiveTab] = useState('recommendations');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  AI Material Selector
                </span>
              </div>
              <Badge className={`${userRole === 'admin' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                {userRole === 'admin' ? (
                  <>
                    <Shield className="h-3 w-3 mr-1" />
                    Administrator
                  </>
                ) : (
                  <>
                    <Users className="h-3 w-3 mr-1" />
                    Core User
                  </>
                )}
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome to your AI Construction Dashboard
          </h1>
          <p className="text-lg text-slate-600">
            Leverage advanced AI algorithms for optimal material selection and project management
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-5">
            <TabsTrigger value="recommendations" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">AI Recommendations</span>
            </TabsTrigger>
            <TabsTrigger value="optimization" className="flex items-center space-x-2">
              <Calculator className="h-4 w-4" />
              <span className="hidden sm:inline">Cost Optimization</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center space-x-2">
              <Building2 className="h-4 w-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            {userRole === 'admin' && (
              <TabsTrigger value="database" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Material DB</span>
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="recommendations" className="mt-6">
            <MaterialRecommendations userRole={userRole} />
          </TabsContent>

          <TabsContent value="optimization" className="mt-6">
            <CostOptimization userRole={userRole} />
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <ProjectManagement userRole={userRole} />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Performance Analytics</span>
                </CardTitle>
                <CardDescription>
                  Comprehensive analytics and insights for material performance and project outcomes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
                    <h3 className="text-lg font-semibold mb-2">Materials Analyzed</h3>
                    <p className="text-3xl font-bold">1,247</p>
                    <p className="text-blue-100">+12% this month</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
                    <h3 className="text-lg font-semibold mb-2">Cost Savings</h3>
                    <p className="text-3xl font-bold">$234K</p>
                    <p className="text-green-100">+18% this month</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg text-white">
                    <h3 className="text-lg font-semibold mb-2">Projects Optimized</h3>
                    <p className="text-3xl font-bold">89</p>
                    <p className="text-orange-100">+7% this month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {userRole === 'admin' && (
            <TabsContent value="database" className="mt-6">
              <MaterialDatabase />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
};
